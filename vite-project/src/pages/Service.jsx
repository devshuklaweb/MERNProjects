import { useAuth } from "../store/auth"
export const Service = () => {
  const { servicesData } = useAuth(); 
  return (
    <>
      <h1>This is Services component</h1>
      <table style={{width:'100%'}}>
        <thead style={{ backgroundColor: '#d4d4d4'}}>
        <tr>
          <th>Service</th>
          <th>Price</th>
          <th>Provider</th>
          <th>Description</th>
          </tr>
        </thead>
        <tbody>
          
          {Array.isArray(servicesData) && servicesData.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.service}</td>
                <td>{element.price}</td>
                <td>{element.provider}</td>
                <td>{element.description}</td>
              </tr>
            )
          })}
        
        </tbody>

      </table>
    </>
  )
}
