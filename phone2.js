const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    
   
  
    

     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
     
      
    
      console.log(url);
    fetch(url).then((response) => {
      if (response.ok) {

          console.log(response);
        return response.json(); 
       
      }
      throw new Error('Something went wrong');
    })
    .then ((data) =>
    {
    
    data.status?displaySearchResult (data.data): displayError()
    })
    
    .catch((error) => {
       console.log(error)
    });    

    //  if(searchText==! url){
    //   const errorText = document.getElementById('error');
    //  const errorMassage = document.createElement('h2');
    //  errorMassage.innerHTML=`<h2>error<h2/>`;
    //  errorText.appendChild(errorMassage);


    // }
    // else{
      //  console.log('ok');
    // }
    
     

    
        }
        
         

          const displaySearchResult = phones => {
              const searchResult = document.getElementById('search-result');
              searchResult.textContent = '';
              phones.forEach(phone => {
                    // console.log(phone)
                  const div = document.createElement('div');
                  div.innerHTML = `<div id=“phone-div” class="card h-100">
                  <img src="${phone.image}" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                  </div>
                </div>
                  `;
                  searchResult.appendChild(div);
                 
const phoneDiv = document.getElementById("phone-div");

phoneDiv.addEventListener("click", () => phoneSearchDetail(phone.slug));
                   console.log(searchResult);
                  
              }
              
             
              )
             
            
              
         } 


         const displayError = () => {
          const errorText = document.getElementById('error');
          
      const errorMassage = document.createElement('h2');
      
     errorMassage.innerHTML=`<h2>Search Not Found<h2/>`;
      errorText.appendChild(errorMassage);

        
          
     }

         const loadSearchDetail = searchId=>{
          const url =  `https://openapi.programming-hero.com/api/phone/${searchId}`;
          fetch(url)
          .then(res => res.json())
          .then(data => displaySearchResult(data.data));
          console.log(data);
         }