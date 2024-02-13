//유저가 값을 입력한다
// + 버튼을 클릭하면, 할일이 추가된다
//delete 버튼을 누르면 할일이 삭제된다
//check 버튼을 누르면 할일이 끝나면서 밑줄이 간다
//진행중 끝남 탭을 누르면, 언더바가 이동한다
//완료탭은, 완료 아이템만, 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아옴

let TaskInput = document.getElementById("task-input")
let AddButton = document.getElementById("add-button")
let TaskList = []

AddButton.addEventListener("click",addTask)

function addTask(){
    let TaskValue = TaskInput.value
    TaskList.push(TaskValue)
    console.log(TaskList)
    render()
}

function render(){
    let resultHTML = ``
    for(let i=0;i<TaskList.length;i++){
        resultHTML += `<div class="task">
        <div>${TaskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`;
    }
    document.getElementById("task-board").innerHTML = resultHTML
}