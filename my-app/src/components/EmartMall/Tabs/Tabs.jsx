const Tabs = ({tabs}) =>{
  return (
    <ul>
      {tabs.map((tab)=>{
        return <li className="list-item"></li>
      })}
    </ul>
  )
}

export default Tabs;