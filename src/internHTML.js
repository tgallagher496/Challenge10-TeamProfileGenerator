function internHTML(intern){
    return `
    <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <p class="card-text">Name: ${intern.name}</p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id:${intern.id}</li>
            <li class="list-group-item">Email:${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
          </ul>   
      </div>
    </div>
  </div>
</div>
    
    
    `
}

module.exports=internHTML;