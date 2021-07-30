function render(obj) {
    let html = '';
    switch(obj.role) {
        case 'Manager': {
            html += `
            <div class="card">
                <div class="cardTop row">
                    <h2 class="name">${obj.name}</h2>
                    <h2 class="title">☕ ${obj.role}</h2>
                </div>
                <div class="cardBottom row">
                    <p>ID: ${obj.id}</p>
                    <p>Email: <a href="mailto:${obj.email}">${obj.email}</a></p>
                    <p>Office Number: ${obj.officeNumber}</p>
                </div>
            </div>
            `;
        } break;
        case 'Engineer': {
            html += `
            <div class="card">
                <div class="cardTop row">
                    <h2 class="name">${obj.name}</h2>
                    <h2 class="title">👓 ${obj.role}</h2>
                </div>
                <div class="cardBottom row">
                    <p>ID: ${obj.id}</p>
                    <p>Email: <a href="mailto:${obj.email}">${obj.email}</a></p>
                    <p>GitHub: <a href="https://github.com/${obj.github}" target="_blank">${obj.github}</a></p>
                </div>
            </div>
            `;
        } break;
        case 'Intern': {
            html += `
            <div class="card">
                <div class="cardTop row">
                    <h2 class="name">${obj.name}</h2>
                    <h2 class="title">🎓 ${obj.role}</h2>
                </div>
                <div class="cardBottom row">
                    <p>ID: ${obj.id}</p>
                    <p>Email: <a href="mailto:${obj.email}">${obj.email}</a></p>
                    <p>School: ${obj.school}</p>
                </div>
            </div>
            `;
        } break;
        default: { return new Error('No valid role selected.') };
    }
    return html; 
}

module.exports = render;