$(document).ready(function() {
  console.log("hey");
  var compliments = ['/back', '/bus', '/cocksplat', '/deraadt', '/gfy', '/ing', '/keep', '/linus', '/nugget']


  var from = 'the compliment machine <3'
  var name
  var min = Math.ceil(0)
  var max = Math.floor(compliments.length)
  var theMath = Math.floor(Math.random() * (max - min + 1)) + min

  $('#thebutton').click(function() {
    callAPI($('#thename').val(), from)
  })

  function callAPI(name, from) {

    $.ajax({
      url: 'https://www.foaas.com' + `${compliments[theMath]}/${name}/${from}`,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(result) {
      console.log(result.message);
      $('#compliment').empty()
      $('#compliment').append(`
                     <div class="col s12">
                         <div class="card indigo lighten-4 col m8 push-m2">
                             <div class="card-content center-align indigo-text">
                                 <span class="card-title" id="compliment">${result.message}</span>
                             </div>
                         </div>
                     </div>`)
    })
  }
})

// function callAPI() {
//   $.get('https://www.foaas.com' + `${compliments[theMath]}/${name}/${from}`, result => {
//     console.log(result);
//     $('#thebutton').click(function() {
//       $('#compliment').empty()
//       $('#compliment').append(`<section class="container">
//           <div class="row">
//               <div class="col s10 m8  push-m2">
//                   <div class="card indigo lighten-4">
//                       <div class="card-content center-align indigo-text">
//                           <span class="card-title" id="compliment">${result}</span>
//
//                       </div>
//
//                   </div>
//               </div>
//           </div>
//       </section>`)
//     })
//
//   });
// }
