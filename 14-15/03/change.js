function find_edit(){
    const name_node  = document.getElementById('name')
    name_node.innerHTML="Maria"

      const abc_node  = document.getElementById('abc')
    abc_node.innerHTML="ABC"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)
