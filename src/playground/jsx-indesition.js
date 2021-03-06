console.log('Apps working succesful')

const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subtitle: 'Just another app on react',
    options: []
}

const onFormSubmit = (e) =>{
    e.preventDefault()

    const option = e.target.elements.option.value

    if(option){
        app.options.push(option)
        // listOptions()
        e.target.elements.option.value = ''
        renderForm()
    }
}
const onMakedecision = () => {
    const randomNum = Math.floor(Math.random()* app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const remove = ()=>{
    app.options =[]
    renderForm()
}


const renderForm = () =>{

const template = (
<div>
    <h1>{app.title}</h1>
    <h3>{app.subtitle}</h3>
    <p>{app.options.length > 0 ? 'Here are your Options' : 'No options to show'}</p>    
    <p>{app.options.length}</p>
    <button disabled={app.options.length === 0} onClick={onMakedecision}>What should I do?</button>
    <button onClick={remove}>Remove All</button>
    <ol>
        { app.options.map((option) => <li key={option}>{option}</li>) }
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>        
    </form>
</div>
)

ReactDOM.render(template, appRoot)
}

renderForm()