

    
 

    function myFunction() {
        var word = document.getElementById("input").value;
        // document.write(word);

        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + word)
    .then(response => response.json())
    .then(
        function displayDish(response) {
            let arrayOfDish = response.meals;
            // let htmlName = '';
            let htmlImg = '';
            // let dishEl = document.getElementById("dish");
            let imgEl = document.getElementById("img");
            for(i=0;i<arrayOfDish.length;i++)
            {
                // html = html + '<p>' + arrayOfDish[i].strMeal + '</p>';
                // dishEl.innerHTML = html;
                htmlImg = htmlImg + '<img src="' + arrayOfDish[i].strMealThumb + '">' + '<h3>' + arrayOfDish[i].strMeal + '</h3>'; 
                
                imgEl.innerHTML = htmlImg;


                
            }
            
        }
    );

      };