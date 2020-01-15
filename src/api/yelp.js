import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers:{
      Authorization: 'Bearer 18PN9PmQRrRpPx5-rp87NQPfY2COpy1iC_7nhHBQlahUGFVPYpS_qDNgLL_DZtcFG9aPp-N-LIEdjIICsfpH46u5xNR-7R8rucnGGiGlCCAPsoAGINr5-P7afHMPXnYx'
  } 
});