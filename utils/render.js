function render(obj) {
    const html;
    const role = obj.getRole();
    switch(role) {
        case 'Manager': {
            html += `
            <div class="card">
                <div class="cardTop row">
                    <h2 class="name">Employee</h2>
                    <h2 class="title">Job Title</h2>
                </div>
                <div class="cardBottom row">
                    <p>ID: </p>
                    <p>Email: </p>
                    <p>Github: </p>
                </div>
            </div>
            `;
        } break;
        case 'Engineer': {

        } break;
        case 'Intern': {

        } break;
        default: { return new Error('No valid role selected.') };
    }   
}

module.exports = render;