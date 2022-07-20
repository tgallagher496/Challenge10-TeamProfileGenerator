function managerHTML(manager){
    return `
    <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Manager</h5>
                  <p class="card-text">Name: ${manager.name}</p>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id:${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                  </ul>    
                </div>
              </div>
            </div>
    
    
    `
}

module.exports=managerHTML;