//Doing a Product web app, in product page to 
//display the name, description, imageUrl, style, price, ..., ...,.....,....


const createHTMLList = (title, description, date) =>
`
<div id='row-item' class="row">
    
    <div class="col-lg-3 text-dark bg-light py-2">
        <h4>${title}</h4>
    </div>
    <div class="col-lg-7 text-dark bg-light py-2">
        <h4>${description}</h4>
    </div>
    <div class="col-lg-2 text-dark bg-light py-2">
        <h4>${date}</h4>
    </div>

</div>  <!-- End of row item -->

`;


class TodoListsController 
{
    constructor() {
        this._items = [];       //create an array to store the details of product items
    }

    //method to add the items into the array
    addItem(title, description, date) {
        var todoListController = this;

        const formData = new FormData();

        formData.append('title', title);
        formData.append('description', description);
        formData.append('date', date);

        fetch('http://localhost:8080/item/add', {
             method: 'POST',
             body: formData
        })
        .then(response => response.json())
        .then(data => {
             console.log('Success:', data);
             alert("Successfully added to TODO List")
        })
        .catch((error) => {
             console.error('Error:', error);
             alert("Error adding item to TODO List")
        });
    }

    displayItem() {

        var todoListController = this;
        todoListController._items = [];

            fetch('http://127.0.0.1:8080/item/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {

                    const itemObj = {
                         id: item.id,
                        title: item.title,
                        description: item.description,
                        date: item.date.split("-").reverse().join("/"),
                   };
                    todoListController._items.push(itemObj);
              });

              todoListController.renderTodoListPage();

            })
            .catch(function(error) {
                console.log(error);
            });

    }

    renderTodoListPage()
    {
        var todoListHTMLList = [];
        
        for (var i=0; i<this._items.length; i++)
        {
            const item = this._items[i];            //assign the individual item to the variable

            const todoListHTML = createHTMLList(item.title, item.description, item.date);

            todoListHTMLList.push(todoListHTML);
        }

        //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
        const pHTML = todoListHTMLList.join('\n');
        document.querySelector('#list-item').innerHTML = pHTML;
    }
}