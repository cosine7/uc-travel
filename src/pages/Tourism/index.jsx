import Banner from '@components/Banner'
import './index.scss'
import { CiMedal } from 'react-icons/ci'
import { BiWorld, BiCheckShield } from 'react-icons/bi'
import { RiVipCrown2Line, RiUserHeartLine } from 'react-icons/ri'
import { GiPalmTree } from 'react-icons/gi'
import { AiOutlineGift } from 'react-icons/ai'
import { CgCodeClimate } from 'react-icons/cg'
import { BsFlagFill } from 'react-icons/bs'
import { GrDiamond } from 'react-icons/gr'
import { FaLeaf, FaHandHoldingHeart } from 'react-icons/fa'
import { SlMagicWand } from 'react-icons/sl'
import { ImPriceTags } from 'react-icons/im'

const resources = [
  { icon: <CiMedal />, title: '资质完善', content: ['出境旅游资质', '民航一类代理资质'] },
  { icon: <BiWorld />, title: '资源丰富', content: ['全球目的地优质', '资源掌控'] },
  { icon: <RiVipCrown2Line />, title: '专属定制', content: ['超过10年的企业', '专属定制经验'] },
  { icon: <BiCheckShield />, title: '品质保障', content: ['上海市4A级旅行社', '25年行业经验'] },
  { icon: <RiUserHeartLine />, title: '匠心服务', content: ['完善的企业', '服务理念'] },
]

const services = [
  { icon: <GiPalmTree />, title: '团建旅游' },
  { icon: <AiOutlineGift />, title: '奖励旅游' },
  { icon: <CgCodeClimate />, title: '会奖旅游' },
  { icon: <BsFlagFill />, title: '参访旅游' },
  { icon: <GrDiamond />, title: '定制旅游' },
  { icon: <FaLeaf />, title: 'GP旅游' },
]

const advantages = [
  { icon: <SlMagicWand />, title: '个性化定制', content: ['根据客户需求灵活组合旅游要素', '策划个性旅行方案', '独立成团'] },
  { icon: <ImPriceTags />, title: '价格透明', content: ['整合全球旅游联盟资源', '拆分明细报价', '保证客户费用节省'] },
  { icon: <CiMedal />, title: '专业可靠', content: ['全国百强旅行社', '上海市4A级旅行社', '20年行业经验'] },
  { icon: <FaHandHoldingHeart />, title: '一站式服务', content: ['专属一对一旅游顾问', '从行前咨询、行程规划到行中服务支持', '确保客户行程更轻松、安全'] },
]

const destinations = ['贵州黄果树瀑布', '云南玉龙雪山', '广西龙脊梯田', '内蒙古腾格里沙漠']

const cases = [
  { title: '上海某知名空调技术有限公司', contents: ['游玩路线: 三亚4日定制游', '出游人数: 48人', '出发日期: 2020年10月'] },
  { title: '苏州某知名电子科技有限公司', contents: ['游玩路线: 桂林5日定制游', '出游人数: 65人', '出发日期: 2020年10月'] },
  { title: '上海某党政机关', contents: ['游玩路线: 大理6日定制', '出游人数: 42人', '出发日期: 2020年10月'] },
  { title: '上海某知名化学有限公司', contents: ['游玩路线: 崇明2日', '出游人数: 380人', '出发日期: 2020年8月'] },
]

export default function Tourism() {
  return (
    <div className="tourism">
      <Banner
        image="tourism.jpg"
        title="企业旅游"
        subtitle="tourism"
        content={['团建旅游、奖励旅游、会奖旅游、参访旅游']}
      />
      <div className="resource">
        {resources.map(resource => (
          <div className="card" key={resource.title}>
            {resource.icon}
            <div className="text">
              <h3>{resource.title}</h3>
              {resource.content.map(p => <h5 key={p}>{p}</h5>)}
            </div>
          </div>
        ))}
      </div>
      <div className="service">
        <div className="mask">
          <h1>我们提供的服务</h1>
          <h4>OUR SERVICES</h4>
          <div className="items">
            {services.map(service => (
              <div className="card" key={service.title}>
                <div className="wrapper">
                  <div className="content">
                    <div className="icon">{service.icon}</div>
                    <div className="title">{service.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="advantage">
        <h1>我们的优势</h1>
        <h4>OUR ADVANTAGE</h4>
        <div className="items">
          {advantages.map(advantage => (
            <div className="card" key={advantage.title}>
              <div className="icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              {advantage.content.map(p => <h5 key={p}>{p}</h5>)}
            </div>
          ))}
        </div>
      </div>
      <div className="destination">
        <h1>热门目的地</h1>
        <h4>POPULAR DESTINATIONS</h4>
        <div className="items">
          {destinations.map((destination, i) => (
            <div className="card" key={destination}>
              <img src={require(`@images/destinations/${i}.jpg`)} alt="热门目的地" />
              <p>{destination}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="case">
        <h1>成功案例</h1>
        <h4>SUCCESS CASES</h4>
        <div className="items">
          {cases.map(($case, i) => (
            <div className="card" key={$case.title} >
              <img src={require(`@images/cases/${i}.jpeg`)} alt="成功案例" />
              <h3>{$case.title}</h3>
              {$case.contents.map(p => <h5 key={p}>{p}</h5>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}