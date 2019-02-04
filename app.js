let tasks = ['Learning JavaScript', 'coba']

const taskListDOM = document.getElementById('list-todolist')

function display() {
  let number = 0

  taskListDOM.innerHTML = ''
  tasks.forEach(task => {
    const listDOM = document.createElement('li')
    const deleteButton = document.createElement('BUTTON')
    const textDOM = document.createTextNode(task)

    deleteButton.setAttribute('id', 'button-delete')
    deleteButton.setAttribute('type', 'submit')
    deleteButton.setAttribute('onclick', `deleteTask( ${number++} )`)

    const button = document.createTextNode('delete')
    deleteButton.appendChild(button)

    listDOM.appendChild(textDOM) // into LI
    listDOM.appendChild(deleteButton)

    taskListDOM.appendChild(listDOM) // into UL
  })
}

function submitTask() {
  event.preventDefault()

  const todo = document.getElementById('input-text').value // string value
  console.log(todo)

  if (todo !== '') {
    tasks.push(todo)
    console.log(tasks)
    display()
    document.getElementById('input-text').value = ''
  }
}

function deleteTask(number) {
  event.preventDefault()

  if (confirm('Are you sure, delete this list?')) {
    const deleted = tasks.filter((todo, index) => {
      return index !== number
    })

    tasks = deleted
    console.log(tasks)

    display()
    console.log(number)
  }
}

display()
