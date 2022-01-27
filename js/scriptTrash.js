
const url = "https://jsonpaceholder.typicode.com/posts"

const detailContainer = document.querySelector(".detailContainer");




async function getPostsFromApi() {
    try {

    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
    
 
    } catch (error) {

        console.log(error);
        detailContainer.innerHTML = error;
    }


}



getPostsFromApi();




//we now send out an errorCode with our try and catch (error)


