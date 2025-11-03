const text = 'Thank you for all your hard work throughout the year🙏🎁'
const sender = 'Ugur'

function getLabelHtml(text, sender, ...names) {
    const labelHtml = names.map(staff => 
        `<div class="label-card">
            <p class="dear">Dear ${staff.name},</p>
            <p>${text}</p>
            <p>Best wishes,</p>
            <p>${sender}</p>
        </div>`
    ).join('')
    return labelHtml
}

document.querySelector('.labels-container').innerHTML = getLabelHtml (
    text,
    sender,
    {name: 'Sally'},
    {name: 'Mike'},
    {name: 'Rob'},
    {name: 'Harriet'},
    {name: 'Brandon'},
    {name: 'Stacy'}
)