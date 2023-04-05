import './index.scss'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { RiComputerLine } from 'react-icons/ri'
import { FaWarehouse } from 'react-icons/fa'
import Banner from '@components/Banner'

const contacts = [
  { icon: <HiOutlineBuildingOffice2 />, title: '企业客户合作专线', content: ['联系人：王小姐', 'TEL: 400-109-0166 转 4', 'Email: uc@uctravelsky.com'] },
  { icon: <RiComputerLine />, title: '技术合作专线', content: ['联系人: 朱先生', 'TEL: (021) 52555502', 'Email: technology@uctravelsky.com'] },
  { icon: <FaWarehouse />, title: '市场合作专线', content: ['联系人：王小姐', 'TEL: 400-109-0166 转 4', 'Email: market@uctravelsky.com'] },
]

export default function Cooperation() {
  return (
    <div className='cooperation'>
      <Banner
        image="cooperation.jpg"
        title="企业合作"
        subtitle="cooperation"
      />
      <div className="contact">
        <h1>联系方式</h1>
        <h4>如果您有其他需求与我们合作，请通过以下方式联系我们，我们资深的业务板块负责人将会为您提供专业、细致的服务与对接</h4>
        <div className="items">
          {contacts.map(contact => (
            <div key={contact.title} className="card">
              {contact.icon}
              <h3>{contact.title}</h3>
              {contact.content.map(p => <h5 key={p}>{p}</h5>)}
            </div>
          ))}
        </div>
      </div>
      <div className="partner">
        <div className="mask">
          <h1>合作伙伴</h1>
          <h4>COOPERATIVE PARTNER</h4>
          <div className="items">
            {Array(15).fill().map((val, i) => (
              <div key={i} className={`card ${Math.floor(i / 5) % 2 ? 'odd' : 'even'}`}>
                <img src={require(`../../assets/images/partners/${i}.png`)} alt="合作伙伴" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}