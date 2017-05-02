
var lineColour, nodeIds, shadowState, nodesArray, nodes, edgesArray, edges, network,timeOfDay,edgesForDisplay, editedEdges;


var lineColourArr = ['#B36305',
                    '#E32017',
                    '#00782A',
                    '#A0A5A9',
                    '#F3A9BB',
                    '#9B0056',
                    '#000000',
                    '#003688',
                    '#0098D4',
                    '#FFD300',
                    '#95CDBA'];


console.log("hellooOo");
 var startNetwork = function() {
    nodesArray = [{"id":500,"label":"Acton Town"},{"id":501,"label":"Barbican"},{"id":502,"label":"Aldgate"},{"id":503,"label":"Aldgate East"},{"id":505,"label":"Alperton"},{"id":506,"label":"Amersham"},{"id":507,"label":"Angel"},{"id":508,"label":"Archway"},{"id":509,"label":"Arnos Grove"},{"id":510,"label":"Arsenal"},{"id":511,"label":"Baker Street"},{"id":512,"label":"Balham"},{"id":513,"label":"Bank / Monument"},{"id":514,"label":"Barking"},{"id":515,"label":"Barkingside"},{"id":516,"label":"Barons Court"},{"id":517,"label":"Bayswater"},{"id":518,"label":"Becontree"},{"id":519,"label":"Belsize Park"},{"id":520,"label":"Bethnal Green"},{"id":521,"label":"Blackfriars"},{"id":522,"label":"Blackhorse Road"},{"id":524,"label":"Bond Street"},{"id":525,"label":"Borough"},{"id":526,"label":"Boston Manor"},{"id":527,"label":"Bounds Green"},{"id":528,"label":"Bow Road"},{"id":529,"label":"Brent Cross"},{"id":530,"label":"Bromley-by-Bow"},{"id":531,"label":"Buckhurst Hill"},{"id":532,"label":"Burnt Oak"},{"id":534,"label":"Caledonian Road"},{"id":535,"label":"Camden Town"},{"id":536,"label":"Cannon Street"},{"id":537,"label":"Canons Park"},{"id":539,"label":"Chalfont & Latimer"},{"id":540,"label":"Chalk Farm"},{"id":541,"label":"Chancery Lane"},{"id":542,"label":"Embankment"},{"id":543,"label":"Chesham"},{"id":544,"label":"Chigwell"},{"id":545,"label":"Chiswick Park"},{"id":546,"label":"Chorleywood"},{"id":547,"label":"Clapham Common"},{"id":548,"label":"Clapham North"},{"id":549,"label":"Clapham South"},{"id":550,"label":"Cockfosters"},{"id":551,"label":"Colindale"},{"id":552,"label":"Colliers Wood"},{"id":553,"label":"Covent Garden"},{"id":554,"label":"Croxley"},{"id":555,"label":"Dagenham East"},{"id":556,"label":"Dagenham Heathway"},{"id":557,"label":"Debden"},{"id":558,"label":"Dollis Hill"},{"id":560,"label":"Ealing Broadway"},{"id":561,"label":"Ealing Common"},{"id":562,"label":"Earl's Court"},{"id":563,"label":"East Acton"},{"id":564,"label":"Eastcote"},{"id":565,"label":"East Finchley"},{"id":566,"label":"East Ham"},{"id":567,"label":"East Putney"},{"id":568,"label":"Edgware"},{"id":569,"label":"Edgware Road"},{"id":570,"label":"Elephant & Castle"},{"id":571,"label":"Elm Park"},{"id":572,"label":"Epping"},{"id":574,"label":"Euston"},{"id":575,"label":"Euston Square"},{"id":576,"label":"Fairlop"},{"id":577,"label":"Farringdon"},{"id":578,"label":"Finchley Central"},{"id":579,"label":"Finchley Road"},{"id":580,"label":"Finsbury Park"},{"id":581,"label":"Fulham Broadway"},{"id":582,"label":"Gants Hill"},{"id":583,"label":"Gloucester Road"},{"id":584,"label":"Golders Green"},{"id":585,"label":"Goldhawk Road"},{"id":586,"label":"Goodge Street"},{"id":587,"label":"Grange Hill"},{"id":588,"label":"Great Portland Street"},{"id":589,"label":"Greenford"},{"id":590,"label":"Green Park"},{"id":591,"label":"Gunnersbury"},{"id":592,"label":"Hainault"},{"id":593,"label":"Hammersmith"},{"id":594,"label":"Hampstead"},{"id":595,"label":"Hanger Lane"},{"id":596,"label":"Harlesden"},{"id":597,"label":"Harrow & Wealdstone"},{"id":598,"label":"Harrow-on-the-Hill"},{"id":599,"label":"Wood Lane"},{"id":601,"label":"Hendon Central"},{"id":602,"label":"High Barnet"},{"id":603,"label":"Highbury & Islington"},{"id":604,"label":"Highgate"},{"id":605,"label":"High Street Kensington"},{"id":606,"label":"Hillingdon"},{"id":607,"label":"Holborn"},{"id":608,"label":"Holland Park"},{"id":609,"label":"Holloway Road"},{"id":610,"label":"Hornchurch"},{"id":611,"label":"Hounslow Central"},{"id":612,"label":"Hounslow East"},{"id":613,"label":"Hounslow West"},{"id":614,"label":"Hyde Park Corner"},{"id":615,"label":"Ickenham"},{"id":616,"label":"Kennington"},{"id":617,"label":"Kensal Green"},{"id":618,"label":"Kensington (Olympia)"},{"id":619,"label":"Kentish Town"},{"id":620,"label":"Kenton"},{"id":621,"label":"Kew Gardens"},{"id":622,"label":"Kilburn"},{"id":623,"label":"Kilburn Park"},{"id":624,"label":"Kingsbury"},{"id":625,"label":"King's Cross St. Pancras"},{"id":626,"label":"Knightsbridge"},{"id":627,"label":"Ladbroke Grove"},{"id":628,"label":"Lambeth North"},{"id":629,"label":"Lancaster Gate"},{"id":630,"label":"Latimer Road"},{"id":631,"label":"Leicester Square"},{"id":632,"label":"Leyton"},{"id":633,"label":"Leytonstone"},{"id":634,"label":"Liverpool Street"},{"id":635,"label":"London Bridge"},{"id":636,"label":"Loughton"},{"id":637,"label":"Maida Vale"},{"id":638,"label":"Manor House"},{"id":639,"label":"Mansion House"},{"id":640,"label":"Marble Arch"},{"id":641,"label":"Marylebone"},{"id":642,"label":"Mile End"},{"id":643,"label":"Mill Hill East"},{"id":645,"label":"Moorgate"},{"id":646,"label":"Moor Park"},{"id":647,"label":"Morden"},{"id":648,"label":"Mornington Crescent"},{"id":649,"label":"Neasden"},{"id":650,"label":"Newbury Park"},{"id":653,"label":"North Acton"},{"id":654,"label":"North Ealing"},{"id":655,"label":"Northfields"},{"id":656,"label":"North Harrow"},{"id":657,"label":"Northolt"},{"id":659,"label":"North Wembley"},{"id":660,"label":"Northwick Park"},{"id":661,"label":"Northwood"},{"id":662,"label":"Northwood Hills"},{"id":663,"label":"Notting Hill Gate"},{"id":664,"label":"Oakwood"},{"id":665,"label":"Old Street"},{"id":667,"label":"Osterley"},{"id":668,"label":"Oval"},{"id":669,"label":"Oxford Circus"},{"id":670,"label":"Paddington"},{"id":671,"label":"Park Royal"},{"id":672,"label":"Parsons Green"},{"id":673,"label":"Perivale"},{"id":674,"label":"Piccadilly Circus"},{"id":675,"label":"Pinner"},{"id":676,"label":"Plaistow"},{"id":677,"label":"Preston Road"},{"id":678,"label":"Putney Bridge"},{"id":679,"label":"Queensbury"},{"id":680,"label":"Queen's Park"},{"id":681,"label":"Queensway"},{"id":682,"label":"Ravenscourt Park"},{"id":683,"label":"Rayners Lane"},{"id":684,"label":"Redbridge"},{"id":685,"label":"Regent's Park"},{"id":686,"label":"Richmond"},{"id":687,"label":"Rickmansworth"},{"id":688,"label":"Roding Valley"},{"id":690,"label":"Royal Oak"},{"id":691,"label":"Ruislip"},{"id":692,"label":"Ruislip Gardens"},{"id":693,"label":"Ruislip Manor"},{"id":694,"label":"Russell Square"},{"id":695,"label":"St. James's Park"},{"id":696,"label":"St. John's Wood"},{"id":697,"label":"St. Paul's"},{"id":698,"label":"Seven Sisters"},{"id":700,"label":"Shepherd's Bush"},{"id":702,"label":"Sloane Square"},{"id":703,"label":"Snaresbrook"},{"id":704,"label":"South Ealing"},{"id":705,"label":"Southfields"},{"id":706,"label":"Southgate"},{"id":707,"label":"South Harrow"},{"id":708,"label":"South Kensington"},{"id":709,"label":"South Kenton"},{"id":710,"label":"South Ruislip"},{"id":711,"label":"South Wimbledon"},{"id":712,"label":"South Woodford"},{"id":713,"label":"Stamford Brook"},{"id":714,"label":"Stanmore"},{"id":715,"label":"Stepney Green"},{"id":716,"label":"Stockwell"},{"id":717,"label":"Stonebridge Park"},{"id":718,"label":"Charing Cross"},{"id":719,"label":"Stratford"},{"id":720,"label":"Sudbury Hill"},{"id":721,"label":"Sudbury Town"},{"id":723,"label":"Swiss Cottage"},{"id":724,"label":"Temple"},{"id":725,"label":"Theydon Bois"},{"id":726,"label":"Tooting Bec"},{"id":727,"label":"Tooting Broadway"},{"id":728,"label":"Tottenham Court Road"},{"id":729,"label":"Tottenham Hale"},{"id":730,"label":"Totteridge & Whetstone"},{"id":731,"label":"Tower Hill"},{"id":733,"label":"Tufnell Park"},{"id":734,"label":"Turnham Green"},{"id":735,"label":"Turnpike Lane"},{"id":736,"label":"Upminster"},{"id":737,"label":"Upminster Bridge"},{"id":738,"label":"Upney"},{"id":739,"label":"Upton Park"},{"id":740,"label":"Uxbridge"},{"id":741,"label":"Victoria"},{"id":742,"label":"Walthamstow Central"},{"id":743,"label":"Wanstead"},{"id":745,"label":"Warren Street"},{"id":746,"label":"Warwick Avenue"},{"id":747,"label":"Waterloo"},{"id":748,"label":"Watford"},{"id":751,"label":"Wembley Central"},{"id":752,"label":"Wembley Park"},{"id":753,"label":"West Acton"},{"id":754,"label":"Westbourne Park"},{"id":755,"label":"West Brompton"},{"id":756,"label":"West Finchley"},{"id":757,"label":"West Ham"},{"id":758,"label":"West Hampstead"},{"id":759,"label":"West Harrow"},{"id":760,"label":"West Kensington"},{"id":761,"label":"Westminster"},{"id":762,"label":"West Ruislip"},{"id":763,"label":"Whitechapel"},{"id":764,"label":"White City"},{"id":765,"label":"Willesden Green"},{"id":766,"label":"Willesden Junction"},{"id":767,"label":"Wimbledon"},{"id":768,"label":"Wimbledon Park"},{"id":769,"label":"Woodford"},{"id":770,"label":"Wood Green"},{"id":771,"label":"Woodside Park"},{"id":775,"label":"Shepherd's Bush Market"},{"id":776,"label":"Pimlico"},{"id":777,"label":"Vauxhall"},{"id":778,"label":"Brixton"},{"id":779,"label":"Hatton Cross"},{"id":780,"label":"Heathrow Terminals 123"},{"id":781,"label":"Heathrow Terminal 4"},{"id":783,"label":"Heathrow Terminal 5"},{"id":784,"label":"Southwark"},{"id":787,"label":"Bermondsey"},{"id":788,"label":"Canada Water"},{"id":789,"label":"North Greenwich"},{"id":852,"label":"Canary Wharf"},{"id":884,"label":"Canning Town"}];
    nodes = new vis.DataSet(nodesArray);

    // create an array with edges
      edgesArray = [{"from":524,"to":511,"line":5},
        {"from":527,"to":509,"line":9},{"from":530,"to":528,"line":3},{"from":530,"to":528,"line":6},{"from":536,"to":513,"line":3},{"from":536,"to":513,"line":11},{"from":539,"to":506,"line":7},{"from":540,"to":519,"line":8},{"from":540,"to":535,"line":8},{"from":543,"to":539,"line":7},{"from":545,"to":500,"line":3},{"from":546,"to":539,"line":7},{"from":548,"to":547,"line":8},{"from":549,"to":547,"line":8},{"from":549,"to":512,"line":8},{"from":551,"to":532,"line":8},{"from":556,"to":555,"line":3},{"from":556,"to":518,"line":3},{"from":561,"to":560,"line":3},{"from":561,"to":500,"line":3},{"from":561,"to":500,"line":9},{"from":562,"to":618,"line":3},{"from":562,"to":516,"line":9},{"from":566,"to":514,"line":6},{"from":566,"to":514,"line":3},{"from":568,"to":532,"line":8},{"from":569,"to":670,"line":3},{"from":569,"to":511,"line":6},{"from":569,"to":511,"line":11},{"from":570,"to":525,"line":8},{"from":571,"to":555,"line":3},{"from":574,"to":535,"line":8},{"from":576,"to":515,"line":2},{"from":577,"to":501,"line":6},{"from":577,"to":501,"line":7},{"from":577,"to":501,"line":11},{"from":578,"to":565,"line":8},{"from":579,"to":511,"line":7},{"from":580,"to":510,"line":9},{"from":583,"to":562,"line":3},{"from":583,"to":562,"line":9},{"from":584,"to":529,"line":8},{"from":587,"to":544,"line":2},{"from":588,"to":575,"line":6},{"from":588,"to":511,"line":6},{"from":588,"to":575,"line":7},{"from":588,"to":511,"line":7},{"from":588,"to":511,"line":11},{"from":588,"to":575,"line":11},{"from":590,"to":524,"line":5},{"from":592,"to":587,"line":2},{"from":592,"to":576,"line":2},{"from":593,"to":516,"line":3},{"from":593,"to":516,"line":9},{"from":593,"to":500,"line":9},{"from":593,"to":585,"line":6},{"from":593,"to":585,"line":11},{"from":594,"to":584,"line":8},{"from":594,"to":519,"line":8},{"from":601,"to":551,"line":8},{"from":601,"to":529,"line":8},{"from":603,"to":580,"line":10},{"from":604,"to":565,"line":8},{"from":604,"to":508,"line":8},{"from":605,"to":562,"line":3},{"from":605,"to":583,"line":11},{"from":607,"to":541,"line":2},{"from":607,"to":553,"line":9},{"from":609,"to":510,"line":9},{"from":609,"to":534,"line":9},{"from":610,"to":571,"line":3},{"from":612,"to":611,"line":9},{"from":613,"to":611,"line":9},{"from":614,"to":590,"line":9},{"from":615,"to":606,"line":7},{"from":615,"to":606,"line":9},{"from":616,"to":570,"line":8},{"from":619,"to":535,"line":8},{"from":620,"to":597,"line":1},{"from":621,"to":591,"line":3},{"from":625,"to":577,"line":6},{"from":625,"to":575,"line":6},{"from":625,"to":577,"line":7},{"from":625,"to":575,"line":7},{"from":625,"to":574,"line":8},{"from":625,"to":507,"line":8},{"from":625,"to":534,"line":9},{"from":625,"to":603,"line":10},{"from":625,"to":574,"line":10},{"from":625,"to":575,"line":11},{"from":625,"to":577,"line":11},{"from":626,"to":614,"line":9},{"from":628,"to":570,"line":1},{"from":630,"to":627,"line":6},{"from":630,"to":599,"line":6},{"from":630,"to":599,"line":11},{"from":630,"to":627,"line":11},{"from":631,"to":553,"line":9},{"from":633,"to":632,"line":2},{"from":634,"to":502,"line":7},{"from":634,"to":520,"line":2},{"from":634,"to":513,"line":2},{"from":634,"to":503,"line":6},{"from":634,"to":502,"line":11},{"from":635,"to":513,"line":8},{"from":635,"to":525,"line":8},{"from":636,"to":557,"line":2},{"from":636,"to":531,"line":2},{"from":637,"to":623,"line":1},{"from":638,"to":580,"line":9},{"from":639,"to":536,"line":3},{"from":639,"to":521,"line":3},{"from":639,"to":536,"line":11},{"from":639,"to":521,"line":11},{"from":640,"to":524,"line":2},{"from":640,"to":629,"line":2},{"from":641,"to":569,"line":1},{"from":641,"to":511,"line":1},{"from":642,"to":520,"line":2},{"from":642,"to":528,"line":3},{"from":642,"to":528,"line":6},{"from":643,"to":578,"line":8},{"from":645,"to":634,"line":6},{"from":645,"to":501,"line":6},{"from":645,"to":634,"line":7},{"from":645,"to":501,"line":7},{"from":645,"to":513,"line":8},{"from":645,"to":501,"line":11},{"from":645,"to":634,"line":11},{"from":646,"to":554,"line":7},{"from":648,"to":535,"line":8},{"from":648,"to":574,"line":8},{"from":649,"to":558,"line":5},{"from":650,"to":515,"line":2},{"from":650,"to":582,"line":2},{"from":653,"to":563,"line":2},{"from":653,"to":595,"line":2},{"from":654,"to":561,"line":9},{"from":655,"to":526,"line":9},{"from":656,"to":598,"line":7},{"from":657,"to":589,"line":2},{"from":660,"to":598,"line":7},{"from":661,"to":646,"line":7},{"from":662,"to":661,"line":7},{"from":663,"to":608,"line":2},{"from":663,"to":517,"line":3},{"from":663,"to":605,"line":3},{"from":663,"to":605,"line":11},{"from":663,"to":517,"line":11},{"from":664,"to":550,"line":9},{"from":665,"to":507,"line":8},{"from":665,"to":645,"line":8},{"from":667,"to":526,"line":9},{"from":667,"to":612,"line":9},{"from":668,"to":616,"line":8},{"from":669,"to":524,"line":2},{"from":669,"to":590,"line":10},{"from":670,"to":569,"line":11},{"from":670,"to":569,"line":1},{"from":670,"to":569,"line":6},{"from":670,"to":568,"line":3},{"from":670,"to":517,"line":3},{"from":670,"to":517,"line":11},{"from":671,"to":654,"line":9},{"from":671,"to":505,"line":9},{"from":672,"to":581,"line":3},{"from":673,"to":595,"line":2},{"from":673,"to":589,"line":2},{"from":674,"to":669,"line":1},{"from":674,"to":631,"line":9},{"from":674,"to":590,"line":9},{"from":675,"to":656,"line":7},{"from":675,"to":662,"line":7},{"from":677,"to":660,"line":7},{"from":678,"to":672,"line":3},{"from":678,"to":567,"line":3},{"from":679,"to":537,"line":5},{"from":679,"to":624,"line":5},{"from":680,"to":617,"line":1},{"from":680,"to":623,"line":1},{"from":681,"to":629,"line":2},{"from":681,"to":663,"line":2},{"from":682,"to":593,"line":3},{"from":683,"to":564,"line":7},{"from":683,"to":564,"line":9},{"from":684,"to":582,"line":2},{"from":685,"to":511,"line":1},{"from":685,"to":669,"line":1},{"from":686,"to":621,"line":3},{"from":687,"to":646,"line":7},{"from":687,"to":546,"line":7},{"from":688,"to":544,"line":2},{"from":690,"to":670,"line":6},{"from":690,"to":670,"line":11},{"from":691,"to":615,"line":7},{"from":691,"to":615,"line":9},{"from":693,"to":564,"line":7},{"from":693,"to":691,"line":7},{"from":693,"to":564,"line":9},{"from":693,"to":691,"line":9},{"from":694,"to":625,"line":9},{"from":694,"to":607,"line":9},{"from":696,"to":511,"line":5},{"from":697,"to":513,"line":2},{"from":697,"to":541,"line":2},{"from":698,"to":580,"line":10},{"from":700,"to":608,"line":2},{"from":703,"to":633,"line":2},{"from":704,"to":500,"line":9},{"from":704,"to":655,"line":9},{"from":705,"to":567,"line":3},{"from":706,"to":664,"line":9},{"from":706,"to":509,"line":9},{"from":707,"to":683,"line":9},{"from":708,"to":702,"line":3},{"from":708,"to":583,"line":3},{"from":708,"to":626,"line":9},{"from":708,"to":583,"line":9},{"from":708,"to":702,"line":11},{"from":708,"to":583,"line":11},{"from":709,"to":620,"line":1},{"from":709,"to":659,"line":1},{"from":710,"to":657,"line":2},{"from":710,"to":692,"line":2},{"from":711,"to":647,"line":8},{"from":711,"to":552,"line":8},{"from":712,"to":703,"line":2},{"from":713,"to":682,"line":3},{"from":714,"to":537,"line":5},{"from":715,"to":642,"line":3},{"from":715,"to":642,"line":6},{"from":716,"to":668,"line":8},{"from":716,"to":548,"line":8},{"from":717,"to":596,"line":1},{"from":718,"to":674,"line":1},{"from":718,"to":542,"line":1},{"from":718,"to":631,"line":8},{"from":718,"to":542,"line":8},{"from":719,"to":632,"line":2},{"from":719,"to":642,"line":2},{"from":720,"to":707,"line":9},{"from":721,"to":505,"line":9},{"from":721,"to":720,"line":9},{"from":723,"to":579,"line":5},{"from":723,"to":696,"line":5},{"from":724,"to":521,"line":3},{"from":724,"to":542,"line":3},{"from":724,"to":521,"line":11},{"from":724,"to":542,"line":11},{"from":725,"to":572,"line":2},{"from":725,"to":557,"line":2},{"from":726,"to":512,"line":8},{"from":727,"to":726,"line":8},{"from":727,"to":552,"line":8},{"from":728,"to":607,"line":2},{"from":728,"to":669,"line":2},{"from":728,"to":586,"line":8},{"from":728,"to":631,"line":8},{"from":729,"to":522,"line":10},{"from":729,"to":698,"line":10},{"from":730,"to":602,"line":8},{"from":731,"to":503,"line":3},{"from":731,"to":513,"line":3},{"from":731,"to":502,"line":11},{"from":731,"to":513,"line":11},{"from":733,"to":508,"line":8},{"from":733,"to":619,"line":8},{"from":734,"to":713,"line":3},{"from":734,"to":591,"line":3},{"from":734,"to":545,"line":3},{"from":735,"to":638,"line":9},{"from":737,"to":736,"line":3},{"from":737,"to":610,"line":3},{"from":738,"to":518,"line":3},{"from":738,"to":514,"line":3},{"from":739,"to":566,"line":3},{"from":739,"to":676,"line":3},{"from":739,"to":566,"line":6},{"from":739,"to":676,"line":6},{"from":740,"to":606,"line":7},{"from":740,"to":606,"line":9},{"from":741,"to":695,"line":3},{"from":741,"to":702,"line":3},{"from":741,"to":590,"line":10},{"from":741,"to":695,"line":11},{"from":741,"to":702,"line":11},{"from":742,"to":522,"line":10},{"from":743,"to":684,"line":2},{"from":743,"to":633,"line":2},{"from":745,"to":574,"line":8},{"from":745,"to":586,"line":8},{"from":745,"to":574,"line":10},{"from":745,"to":669,"line":10},{"from":746,"to":637,"line":1},{"from":746,"to":670,"line":1},{"from":747,"to":513,"line":12},{"from":747,"to":542,"line":1},{"from":747,"to":628,"line":1},{"from":747,"to":542,"line":8},{"from":747,"to":616,"line":8},{"from":748,"to":554,"line":7},{"from":751,"to":659,"line":1},{"from":751,"to":717,"line":1},{"from":752,"to":624,"line":5},{"from":752,"to":649,"line":5},{"from":752,"to":579,"line":7},{"from":752,"to":677,"line":7},{"from":753,"to":560,"line":2},{"from":753,"to":653,"line":2},{"from":754,"to":690,"line":6},{"from":754,"to":627,"line":6},{"from":754,"to":627,"line":11},{"from":754,"to":690,"line":11},{"from":755,"to":562,"line":3},{"from":755,"to":581,"line":3},{"from":756,"to":578,"line":8},{"from":757,"to":719,"line":5},{"from":757,"to":676,"line":3},{"from":757,"to":530,"line":3},{"from":757,"to":676,"line":6},{"from":757,"to":530,"line":6},{"from":758,"to":622,"line":5},{"from":758,"to":579,"line":5},{"from":759,"to":598,"line":7},{"from":759,"to":683,"line":7},{"from":760,"to":562,"line":3},{"from":760,"to":516,"line":3},{"from":761,"to":542,"line":3},{"from":761,"to":695,"line":3},{"from":761,"to":590,"line":5},{"from":761,"to":747,"line":5},{"from":761,"to":542,"line":11},{"from":761,"to":695,"line":11},{"from":762,"to":692,"line":2},{"from":763,"to":715,"line":3},{"from":763,"to":503,"line":3},{"from":763,"to":715,"line":6},{"from":763,"to":503,"line":6},{"from":764,"to":700,"line":2},{"from":764,"to":563,"line":2},{"from":765,"to":558,"line":5},{"from":765,"to":622,"line":5},{"from":766,"to":596,"line":1},{"from":766,"to":617,"line":1},{"from":768,"to":767,"line":3},{"from":768,"to":705,"line":3},{"from":769,"to":531,"line":2},{"from":769,"to":712,"line":2},{"from":769,"to":688,"line":2},{"from":770,"to":527,"line":9},{"from":770,"to":735,"line":9},{"from":771,"to":730,"line":8},{"from":771,"to":756,"line":8},{"from":775,"to":599,"line":6},{"from":775,"to":585,"line":6},{"from":775,"to":585,"line":11},{"from":775,"to":599,"line":11},{"from":776,"to":741,"line":10},{"from":777,"to":776,"line":10},{"from":777,"to":716,"line":10},{"from":778,"to":716,"line":10},{"from":779,"to":781,"line":9},{"from":779,"to":613,"line":9},{"from":780,"to":779,"line":9},{"from":781,"to":780,"line":9},{"from":783,"to":780,"line":9},{"from":784,"to":747,"line":5},{"from":784,"to":635,"line":5},{"from":787,"to":635,"line":5},{"from":788,"to":787,"line":5},{"from":852,"to":788,"line":5},{"from":852,"to":789,"line":5},{"from":884,"to":789,"line":5},{"from":884,"to":757,"line":5}];

    edges = new vis.DataSet();
    edges.on('*', function( event, properties, senderID) {
      console.log('event', event, properties);
    });


    // create a network
    var container = document.getElementById('londonTubeNetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        physics: {
          enabled : true
        },
        nodes: {
            shape: 'dot'
        },
        interaction: {
          navigationButtons: true,
          dragNodes: false
        },
        edges: {
            smooth: false,
            scaling : {
              min : 1,
              max: 100
            }
        },
        layout: {
          hierarchial : {
            enabled: true,
            nodeSpacing: 1000,
            treeSpacing: 200,
            levelSeperation: 150
          }
        }
    };
    network = new vis.Network(container, data, options);
}



//below removes items on line 8
var testFunction = function (){
    var items = edges.get({
  filter: function (item) {
    return item.line != 8;
  }
});


for (var i = 0; i < items.length; i = i + 1 )
{
edges.remove(items[i].id)
}
};


var getEdges = async function(dayTime) {
  timeOfDay = dayTime;
  $.get( `/edges/${timeOfDay}`, function(data) {
    edgesForDisplay = data
    editedEdges = "[{";
    for (var i = 0; i < edgesForDisplay.length; i++) {
      for (var property in edgesForDisplay[i]) {
        if ( (edgesForDisplay[i].hasOwnProperty(property)) && property != 'passengerInformation' ) {
          if (property === "_id") {
            propertyValue = '"' + edgesForDisplay[i][property] + '"';
          } else {
            propertyValue = edgesForDisplay[i][property];
            }
          editedEdges = `${editedEdges} "${property}" : ${propertyValue},`;
        } else {
         propertyValue =  10000 * parseInt(edgesForDisplay[i]['passengerInformation'][timeOfDay]);
         editedEdges = `${editedEdges} "value":${propertyValue}, `;
       }
      }
      lineColour = lineColourArr[edgesForDisplay[i]['line']];
      editedEdges = `${editedEdges} "color" : "${lineColour}"},{`
    }
    editedEdges = editedEdges.slice(0,-2);
    editedEdges = editedEdges + "]";
    editedEdges = JSON.parse(editedEdges);

    if ( edges.length === 0 ) {
      edges.add(editedEdges);
    } else {
      edges.clear()
      edges.add(editedEdges);
    }
  });
  };

startNetwork();

document.querySelector('#selector').addEventListener('change', function(e) {
    console.log(e.target.defaultValue);
    getEdges(e.target.value);
});
