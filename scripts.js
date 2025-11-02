function getLabelHtml() {
    // <div class="label-card">
    //     <p class="dear">Dear </p>
    //     <p></p>
    //     <p>Best wishes, </p>
    //     <p></p>
    // </div>
}

const text = 'Thank you for all your hard work throughout the year🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelHtml (
    text,
    sender,
    {name: 'Sally'},
    {name: 'Mike'},
    {name: 'Rob'},
    {name: 'Harriet'}
)