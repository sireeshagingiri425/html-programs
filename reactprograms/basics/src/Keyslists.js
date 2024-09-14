
function Keyslists(){

  const tabstyle={
    Tstyle:{
      border:"solid 1px black",
      backgroundColor:"lightpink",
      padding:"10px",
      textAlign:"center"
      
    },
    Trow:{
border:"solid 1px black",
backgroundColor:"lightgreen",
padding:"20px"
    }
  }
    let user= [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },]
        return(
            <table  style={tabstyle.Trow}>
                <tr  style={tabstyle.Tstyle}>
                <th style={tabstyle.Tstyle}>Id</th>
                <th style={tabstyle.Tstyle}>name</th>
                <th style={tabstyle.Tstyle}>email</th>
                <th style={tabstyle.Tstyle}>CompanyName</th>
                
                </tr >
                
                    {user.map((curele,index,arr)=>(
                     <tr   key={curele.id} style={tabstyle.Trow}>
                        {/* in the above the key is must be give in a unique way like id */}
                        <td style={tabstyle.Trow}>{curele.id}</td>
                        <td style={tabstyle.Trow}>{curele.name}</td>
                        <td style={tabstyle.Trow}>{curele.email}</td>
                        <td style={tabstyle.Trow}>{curele.company.name}</td>
                     </tr>
                    ))}
                
            </table>
        )
}
export default Keyslists;