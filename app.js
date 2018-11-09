document.addEventListener('DOMContentLoaded', function() {
  //Remove
  const list = document.querySelector('#book-list ul');
  list.addEventListener('click', function(e) {
    if(e.target.className == 'delete') {
      const li = e.target.parentElement;
      list.removeChild(li);
      if(list.children.length == 0) {
        list.parentElement.removeChild(list);
      }
    }
  });
  //Add
  const addForm = document.forms['add-book'];
  addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector("input[type='text']").value;
    if(value != '') {
      //Create Elements
      const li = document.createElement('li');
      const bookName = document.createElement('span');
      const deleteBtn = document.createElement('span');
      //Add Content
      bookName.textContent = value;
      deleteBtn.textContent = 'Delete';
      //Add Classess
      bookName.clasName = 'name';
      deleteBtn.className = "delete";

      // Append to document 
      li.appendChild(bookName); 
      li.appendChild(deleteBtn);
      //Append textNode
      list.appendChild(li);
    } else {
      alert('Please put your book name.')
      return false;
    }
  });
  //Hide all books
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function() {
    if(hideBox.checked) {
      list.style.display = 'none';
    }else {
      list.style.display = 'block';
    }
  });
  //Filter Books
  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toUpperCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {
      const title = book.firstElementChild.textContent;
      if(title.toUpperCase().indexOf(term) != -1) {
        book.style.display = 'block';
      }else {
        book.style.display = 'none'
      }
    });
  });
  //Tabbed Content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', function(e) {
    if(e.target.tagName == 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach(function(panel) {
        if(panel == targetPanel) {
          panel.classList.add('active');
        }else {
          panel.classList.remove('active');
        }
      });
    }
  });
})

