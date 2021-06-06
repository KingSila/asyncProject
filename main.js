
const clientId = 'BVJBTN2Y1RT2BXCXOTAEIHRDGIV2H3KJN55XOC1NPFVT2VPT';
const clientSecret = 'WJEXTKRPJH33M4O0OPRHH114MVPDMLWHDJF44LXCTM2E1Q14';

const url = 'https://api.foursquare.com/v2/venues/explore?near=';

const openWeatherKey = '4a8018b7123481c245919f46cfa933a7';

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'


const getVenues = async () => {
const city = $input.val();
const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;
try{
    const response = await fetch(urlToFetch);
    if(response.ok){
        console.log(response);
    }
    
}
catch(error){
    console.log(error);
    
}
};

