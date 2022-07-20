function engineerHTML(engineer){
    return `
    <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Engineer</h5>
                  <p class="card-text">Name:${engineer.name}</p>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id:${engineer.id}</li>
                    <li class="list-group-item">Email:${engineer.email}</li>
                    <li class="list-group-item">GitHub: ${engineer.github}</li>
                  </ul>        
                </div>
              </div>
            </div>

    
    
    `
}

module.exports=engineerHTML;