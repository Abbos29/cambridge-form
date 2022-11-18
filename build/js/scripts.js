// Custom Scripts
// Custom scripts


const getTemplate = (data = [], placeholder, selectedId) => {
    let text = placeholder ?? 'placeholder не указан'

    const items = data.map(item => {
        let cls = ''
        if (item.id === selectedId) {
            text = item.value
            cls = 'selected'
        }
        return `
            <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
        `
    })
    return `
        <input type="hidden" class="hidden__input">
        <div class="select__backdrop" data-type="backdrop"></div>
        <div class="select__input" data-type="input">
            <span data-type="value">${text}</span>
            <img src="./img/down-arrow.svg" alt="arrow" data-type="arrow" class="select__arrow">
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
                ${items.join('')}
            </ul>
        </div>
    `
}
class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.options = options
        this.selectedId = options.selectedId

        this.render()
        this.setup()
    }

    render() {
        const { placeholder, data } = this.options
        this.$el.classList.add('select')
        this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
    }
    setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener('click', this.clickHandler)
        this.$arrow = this.$el.querySelector('[data-type="arrow"]')
        this.$value = this.$el.querySelector('[data-type="value"]')
    }

    clickHandler(event) {
        const { type } = event.target.dataset
        if (type === 'input') {
            this.toggle()
        } else if (type === 'item') {
            const id = event.target.dataset.id
            this.select(id)
        }  else if (type === 'backdrop') {
            this.close()
        }
    }

    get isOpen() {
        return this.$el.classList.contains('open')
    }

    get current() {
        return this.options.data.find(item => item.id === this.selectedId)
    }

    select(id) {
        this.selectedId = id
        this.$value.textContent = this.current.value

        this.$el.querySelectorAll(`[data-type="item"]`).forEach( el => el.classList.remove('selected'))
        this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

        this.options.onSelect ? this.options.onSelect(this.current) : null
        this.close()
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    open() {
        this.$el.classList.add('open')
        this.$arrow.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
        this.$arrow.classList.remove('open')
    }

    destroy() {
        this.$el.removeEventListener('click', this.clickHandler)
        this.$el.innerHTML = ''
    }
}


// Инициализация плагина
// const select1 = new Select('#select1', {
//     placeholder: 'Country',
//     selectedId: '',
//     data: [
//         {id: '1', value: 'Uzbekistan'},
//         {id: '2', value: 'Other'},
//     ],
//     onSelect(item) {
//         const input = document.querySelector('.hidden__input')
//         input.value = item.value
//     } 
// })

const select2 = new Select('#select2', {
    placeholder: 'City',
    selectedId: '',
    data: [
        {id: '1', value: 'Tashkent'},
        {id: '2', value: '12 Region'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const select3 = new Select('#select3', {
    placeholder: 'Gender',
    selectedId: '',
    data: [
        {id: '1', value: 'Male'},
        {id: '2', value: 'Female'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

// const select4 = new Select('#select4', {
//     placeholder: 'Employed',
//     selectedId: '',
//     data: [
//         {id: '1', value: 'Yes'},
//         {id: '2', value: 'No'},
//     ],
//     onSelect(item) {
//         const input = document.querySelector('.hidden__input')
//         input.value = item.value
//     } 
// })

const select5 = new Select('#select5', {
    placeholder: 'Overall Degree Result',
    selectedId: '',
    data: [
        {id: '1', value: 'Passed'},
        {id: '2', value: 'Merit'},
        {id: '3', value: 'Distinction'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const select6 = new Select('#select6', {
    placeholder: 'Overall Degree Result',
    selectedId: '',
    data: [
        {id: '1', value: '18.00 - 21.00'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const select7 = new Select('#select7', {
    placeholder: 'Do you have work experience in the following areas:',
    selectedId: '',
    data: [
        {id: '1', value: 'Business Management'},
        {id: '2', value: 'Marketing'},
        {id: '3', value: 'English Language teaching'},
        {id: '4', value: 'No work experience'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const select8 = new Select('#select8', {
    placeholder: 'Select',
    selectedId: '',
    data: [
        {id: '1', value: 'Student'},
        {id: '2', value: 'Employed'},
        {id: '3', value: 'Unemployed'},
        {id: '4', value: 'Self-employed'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const select9 = new Select('#select9', {
    placeholder: `Choose the master's degree`,
    selectedId: '',
    data: [
        {id: '1', value: 'Master of Business Administration (MBA)'},
        {id: '2', value: 'MA in Digital Marketing and Business Innovation'},
        {id: '3', value: 'MA in English Language and Education (ELE)'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const select10 = new Select('#select10', {
    placeholder: `Intake`,
    selectedId: '',
    data: [
        {id: '1', value: 'January 2023'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const select11 = new Select('#select11', {
    placeholder: `IELTS`,
    selectedId: '',
    data: [
        {id: '1', value: '5'},
        {id: '2', value: '6'},
        {id: '3', value: '7'},
        {id: '4', value: '8'},
        {id: '5', value: '9'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})





