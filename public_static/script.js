$(function () {
    let inp_name = $('#name')
    let inp_age = $('#age')
    let inp_city = $('#city')
    let btn_submit = $('#submit')
    let tablePerson = $('#persons')

    console.log('in script.js')

    function refreshPersonTable(persons) {
        tablePerson.empty()
        tablePerson.append(
            `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            </tr>`
        )
        for (person of persons) {
            tablePerson.append(
                `<tr>
                    <td>${person.name}</td>
                    <td>${person.age}</td>
                    <td>${person.city}</td>
                </tr>`
            )
        }
    }

    $.get('/api/persons', (data) => {
        refreshPersonTable(data)
    })


    btn_submit.click(() => {
        console.log('button clicked')
        $.post('/api/persons', {
            name: inp_name.val(),
            age: inp_age.val(),
            city: inp_city.val()
        }, (data) => {
            refreshPersonTable(data)
        })
    })
})