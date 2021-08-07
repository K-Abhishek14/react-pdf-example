import React from "react";
import { createGlobalStyle } from "styled-components";
// import { Link } from "react-router-dom";
import { createPdfFromHtml } from "./Logic";
import Paper from '@material-ui/core/Paper';
import './print.css'
import data from './dummyData'

import {
	TableContainer,
	Table,
	TableBody,
	TableHead,
	TableCell,
	TableRow,
	makeStyles,
	TablePagination,
	Divider,
	Typography
} from "@material-ui/core";
import Logo from '../Asset/Logo.png';

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650,
		backgroundColor: theme.palette.common.white,
	},
	border: {

		borderTop: `${theme.spacing(0.2)} solid ${theme.palette.common.mercury}`,
		borderBottom: `${theme.spacing(0.2)} solid ${theme.palette.common.mercury}`,
		'&:first-child': {
			borderLeft: `${theme.spacing(0.2)} solid ${theme.palette.common.mercury}`
		},
		'&:last-child': {
			borderRight: `${theme.spacing(0.2)} solid ${theme.palette.common.mercury}`
		}
	},

}));

const rows = [
	{ "sno": "1", "offervasname": "USSD 249", "pricetype": "INSTALLATION FEE", "amount": "GHS 2,000.00", "discount": "GHS 400.00", "netamount": "GHS 1,600.00", "discountperiod": "1 month", "aadp": "GHs 12.3" },
	{ "sno": "2", "offervasname": "USSD 249", "pricetype": "INSTALLATION FEE", "amount": "GHS 2,000.00", "discount": "GHS 400.00", "netamount": "GHS 1,600.00", "discountperiod": "1 month", "aadp": "GHs 12.3" },
	{ "sno": "3", "offervasname": "USSD 249", "pricetype": "INSTALLATION FEE", "amount": "GHS 2,000.00", "discount": "GHS 400.00", "netamount": "GHS 1,600.00", "discountperiod": "1 month", "aadp": "GHs 12.3" },
	{ "sno": "4", "offervasname": "USSD 249", "pricetype": "INSTALLATION FEE", "amount": "GHS 2,000.00", "discount": "GHS 400.00", "netamount": "GHS 1,600.00", "discountperiod": "1 month", "aadp": "GHs 12.3" }
];

const rowsA = [
	{ "percentage": "50%", "amount": "GHS 49.54", "stagedate": "UAT ACCEPTANCE" },
	{ "percentage": "50%", "amount": "GHS 49.54", "stagedate": "UAT ACCEPTANCE" },
	{ "percentage": "50%", "amount": "GHS 49.54", "stagedate": "UAT ACCEPTANCE" },
]

const Global = createGlobalStyle`
  /* paper.css */
  https://github.com/cognitom/paper-css

  /* @page { margin: 0 } */
  #print {
    margin: 0;
    font-family: "IPAexGothic", sans-serif;
  }
  .sheet {
    margin: 0;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    page-break-after: always;
  }
  
  
  /** Paper sizes **/
  #print.A3               .sheet { width: 297mm; height: 419mm }
  #print.A3.landscape     .sheet { width: 420mm; height: 296mm }
  // #print.A4               .sheet { width: 210mm; height: 296mm }
  #print.A4.landscape     .sheet { width: 297mm; height: 209mm }
  #print.A5               .sheet { width: 148mm; height: 209mm }
  #print.A5.landscape     .sheet { width: 210mm; height: 147mm }
  #print.letter           .sheet { width: 216mm; height: 279mm }
  #print.letter.landscape .sheet { width: 280mm; height: 215mm }
  #print.legal            .sheet { width: 216mm; height: 356mm }
  #print.legal.landscape  .sheet { width: 357mm; height: 215mm }
  
  /** Padding area **/
  .sheet.padding-10mm { padding: 10mm }
  .sheet.padding-15mm { padding: 15mm }
  .sheet.padding-20mm { padding: 20mm }
  .sheet.padding-25mm { padding: 25mm }
  
  /** For screen preview **/
  @media screen {
    body {
      background: #E0E0E0;
      height: 100%;
    }
    .sheet {
      background: #FFFFFF;
      /* margin: 5mm auto; */
      padding: 5mm 0;
    }
  }
  
  /** Fix for Chrome issue #273306 **/
  @media print {
    #print.A3.landscape            { width: 420mm }
    #print.A3, #print.A4.landscape { width: 297mm }
    #print.A4, #print.A5.landscape { width: 210mm }
    #print.A5                      { width: 148mm }
    #print.letter, #print.legal    { width: 216mm }
    #print.letter.landscape        { width: 280mm }
    #print.legal.landscape         { width: 357mm }
  }
`;

export class PrintPage extends React.Component {
	printContent;
	render() {
		return (
			<>
				<Global />
				<button onClick={this.handleClick}>PDF DOWNLOAD</button>
				<div id="print" className="A4">
					<Sheet />
					<div style={{ position: "fixed", top: "200vh" }}>
						<div
							ref={el => {
								this.printContent = el;
							}}
						>
							<Sheet />
						</div>
					</div>
				</div>
			</>
		);
	}

	handleClick = () => {
		createPdfFromHtml(this.printContent);
	};
}

const Sheet = () => {
	React.useEffect(() => {
		console.log("data",data)
	})
	const classes = useStyles();
	return (
 
		<div className="sheet padding-10mm">
 
 
			<div style={{ height: "10rem" }}>
				<div style={{ width: "180px", float: "left" }}>
					<img src={Logo} />
				</div>

				<div className="headerDateAddress">
					<div className="date">01 Mar 2021</div>
					<div className="companyNameHeader">Tecnotree Corporation Pvt.</div>
					<div className="Address">Tridib building B-Block 1st Floor Bairasandra Main <br />RdCauveri Colony GM Palya C V Raman Nagar, <br /> Bengaluru</div>
				</div>
			</div>


			<Divider />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<h4 className="quoteCompanyPContactDetails">Quote Details	</h4>
					<div className="quoteCompanyPContactDetailsAllData">Quote ID : {data.QuoteID}</div>
					<div className="quoteCompanyPContactDetailsAllData">Quote NAME : {data.QuoteName}</div>
					<div className="quoteCompanyPContactDetailsAllData">Validity: {data.Validity}</div>
					<div className="quoteCompanyPContactDetailsAllData">Quote Type : {data.QuoteType}</div>
				</div>
				<div>
					<h4 className="quoteCompanyPContactDetails">Comapny  Details	</h4>
					<div className="quoteCompanyPContactDetailsAllData">Comapny Name : {data.CompanyName}</div>
					<div className="quoteCompanyPContactDetailsAllData">Comapny Reg. Num :{data.CompanyRegNo}</div>
					<div className="quoteCompanyPContactDetailsAllData">Industry Type :{data.IndustryType}</div>
					<div className="quoteCompanyPContactDetailsAllData">Customer Category : {data.CustomerCategory}</div>
					<div className="quoteCompanyPContactDetailsAllData">Comapny Address : {data.CompanyAddress1}</div>
				</div>
				<div>
					<h4 className="quoteCompanyPContactDetails">Primary Contact Details</h4>
					<div className="quoteCompanyPContactDetailsAllData">Name : {data.Name}</div>
					<div className="quoteCompanyPContactDetailsAllData">Last Name : {data.Lastname}</div>
					<div className="quoteCompanyPContactDetailsAllData">Mobile : {data.Mobile}</div>
					<div className="quoteCompanyPContactDetailsAllData">Email : {data.Email}</div>
				</div>
			</div>




			<h4 className="offeringDetailshead">Offering Details</h4>

			<div className="offeringDetails">
				<div className="offeringDetailsUssd">USSD 249</div>
				<div className="offeringDetails2">POSTPAID</div>
				<br />
				<div className="offeringDetailsA">
					<div className="offeringDetailsAa">short Code Type : Balance Check</div>
					<div className="offeringDetailsAa">Service Category : Bank balance</div>
					<div className="offeringDetailsAa">USSD CODE  : *121*2#</div>
					<div className="offeringDetailsAa">Service Description : -- </div>
				</div>
			</div>
			<br />
			<div className="offeringDetails">
				<div className="offeringDetailsUssd">Annual Maintenance</div>
				<div className="offeringDetails2">POSTPAID</div>
				<br />
				<div className="offeringDetailsA">
					<div className="offeringDetailsAa">Server Filed : 	Server Value</div>
					<div className="offeringDetailsAa">Server Filed : 	Server Value</div>
				</div>
			</div>
			<br />
			<div className="offeringDetails">
				<div className="offeringDetailsUssd">USSD 249</div>
				<div className="offeringDetails2">POSTPAID</div>
				<br />
				<div className="offeringDetailsA">
					<div className="offeringDetailsAa">short Code Type : Balance Check</div>
					<div className="offeringDetailsAa">Service Category : Bank balance</div>
					<div className="offeringDetailsAa">USSD CODE  : *121*2#</div>
					<div className="offeringDetailsAa">Service Description : -- </div>
				</div>
			</div>

			<br />
			<div className="offeringDetails">
				<div className="offeringDetailsUssd">Dedicated Bandwidth - 399</div>
				<div className="offeringDetails2">POSTPAID</div>
				<br />
				<div className="offeringDetailsA">
					<div className="offeringDetailsAa">Capacity : 1024Mbps</div>
					<div className="offeringDetailsAa">Last Mile Backhaul : Fiber and Microwave</div>
					<div className="offeringDetailsAa">Network Type : 4G</div>
					<div className="offeringDetailsAa">Region Type : Intra </div>
				</div>

				<br />
				<div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
					<div className="offeringDetails" >
						<div className="offeringDetailsUssd">Installation Address</div>
						<br />
						<div className="offeringDetailsA">
							<div className="offeringDetailsAa">Site Name : Tecnotree Dubai</div>
							<div className="offeringDetailsAa">Address : Coco-Cola.Inc Food Industries, No. 5, Alidoust Alley, Tehran, Khorasan, Iran - 15119-43943</div>
						</div>
					</div>
				</div>
				<br />

				<div style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
					<div className="offeringDetails" >
						<div className="offeringDetailsUssd">Equipment Details</div>
						<br />
						<div className="offeringDetailsA">
							<div className="offeringDetailsAa">Make : D-Link Dual</div>
							<div className="offeringDetailsAa">Warranty : Till 20 Dec 2021</div>
							<div className="offeringDetailsAa">Contract penalty : GHS 50.00</div>
						</div>
						<div className="offeringDetailsA">
							<div className="offeringDetailsAa">Modal : F9K1104V1</div>
							<div className="offeringDetailsAa">IMEI Number : 58743528945789</div>
							<div className="offeringDetailsAa">Faculty penalty : GHS 25.00</div>
						</div>
					</div>
				</div>

			</div>
			<br />
			<div className="priceDetails">Price Details</div>
			<div className="upforntCharges">Upfront Charges</div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>S.NO</TableCell>
							<TableCell align="right">OFFER/VAS NAME</TableCell>
							<TableCell align="right">PRICE TYPE</TableCell>
							<TableCell align="right">AMOUNT</TableCell>
							<TableCell align="right">DISCOUNT</TableCell>
							<TableCell align="right">NET AMOUNT</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.sno}>
								<TableCell component="th" scope="row" className={classes.border}>{row.sno}</TableCell>
								<TableCell align="right" className={classes.border}>{row.offervasname}</TableCell>
								<TableCell align="right" className={classes.border}>{row.pricetype}</TableCell>
								<TableCell align="right" className={classes.border}>{row.amount}</TableCell>
								<TableCell align="right" className={classes.border}>{row.discount}</TableCell>
								<TableCell align="right" className={classes.border}>{row.netamount}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<br />
			<br />
			<div className="recurringCharges">Recurring Charges</div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>S.NO</TableCell>
							<TableCell align="right">OFFER/VAS NAME</TableCell>
							<TableCell align="right">RECURRING PERIOD</TableCell>
							<TableCell align="right">AMOUNT</TableCell>
							<TableCell align="right">DISCOUNT</TableCell>
							<TableCell align="right">DISCOUNT PERIOD</TableCell>
							<TableCell align="right">NET AMOUNT</TableCell>
							<TableCell align="right">AMOUNT AFTER DISCOUNT PERIOD</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.sno}>
								<TableCell component="th" scope="row" className={classes.border}>{row.sno}</TableCell>
								<TableCell align="right" className={classes.border}>{row.offervasname}</TableCell>
								<TableCell align="right" className={classes.border}>{row.pricetype}</TableCell>
								<TableCell align="right" className={classes.border}>{row.amount}</TableCell>
								<TableCell align="right" className={classes.border}>{row.discount}</TableCell>
								<TableCell align="right" className={classes.border}>{row.discountperiod}</TableCell>
								<TableCell align="right" className={classes.border}>{row.netamount}</TableCell>
								<TableCell align="right" className={classes.border}>{row.aadp}</TableCell>

							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<br />
			<br />
		
	

			<div className="contractInfo">Contract Information</div>

			<div className="offeringDetails" >
				<br />
				<div className="offeringDetailsA">
					<div className="offeringDetailsAa">Contract ID : 1234567890</div>
					<div className="offeringDetailsAa">Contract Period : 12 Month</div>
					<div className="offeringDetailsAa">Biling Start Type : Contract Signature Date</div>
				</div>
				<div className="offeringDetailsA">
					<div className="offeringDetailsAa">Contract Type : Auto-Renewal</div>
					<div className="offeringDetailsAa">Notice Period :1 Month</div>
					<div className="offeringDetailsAa">Contract Validity : 18 Jan 2021</div>
				</div>
				<div className="offeringDetailsUssd">Contract Sign off Details</div>
				<br />
				<div className="offeringDetailsA">
					<div className="offeringDetailsAa">PO Reference Number : 12345678901</div>
					<div className="offeringDetailsAa">Signed BY : Jessica Pearson</div>
					<div className="offeringDetailsAa">Smart Service Location : Location 1</div>
				</div>
				<div className="offeringDetailsA">
					<div className="offeringDetailsAa">LG Reference Number : F9K1104V1</div>
					<div className="offeringDetailsAa">Customer Signed By : Elize Fisher</div>
					<div className="offeringDetailsAa">Revenue Sharing Percentage : 20%</div>
				</div>
			</div>
 
			</div>
 
	);
};
