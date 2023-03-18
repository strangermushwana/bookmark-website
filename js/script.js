const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
  tabs.forEach((tab) => tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0'))
  panels.forEach((panel) => panel.classList.add('hidden'))

  e.target.classList.add('border-softRed', 'border-b-4')
  const classStr = e.target.getAttribute('data-target')
  document.getElementById('panels').getElementsByClassName(classStr)[0].classList.remove('hidden')
}