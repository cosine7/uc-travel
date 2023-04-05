import video from '../../assets/video/welcome.mp4'
import './index.scss'
import { ImAirplane } from 'react-icons/im'
import { FaHotel } from 'react-icons/fa'
import { GiPalmTree, GiStack, GiMoneyStack } from 'react-icons/gi'
import { MdOutlineSource } from 'react-icons/md'
import { AiOutlineQrcode } from 'react-icons/ai'
import { BiWorld, BiShoppingBag } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io'
import { IoBagCheckOutline } from 'react-icons/io5'
import { TbHeartHandshake, TbDeviceDesktopAnalytics, TbTie } from 'react-icons/tb'
import { RiUserHeartLine, RiComputerLine, RiMoneyCnyCircleLine, RiVipCrown2Line, RiAdminLine } from 'react-icons/ri'

const demands = [
  { icon: <ImAirplane />, title: '机票', content: ['覆盖全球400多家航空公司', '各大航空公司协议价', '支持在线预订、退改'] },
  { icon: <FaHotel />, title: '酒店', content: ['覆盖全球140万家酒店', '国内7000家酒店协议价', '支持多供应商比价服务'] },
  { icon: <GiPalmTree />, title: '旅游', content: ['超10年企业定制旅游经验', '掌握全球目的地优质资源', '奖励、团建、会务和参访旅游'] },
  { icon: <GiStack />, title: '增值服务', content: ['机票、酒店、签证、用车、火车票', '汽车票、用餐服务、机场服务', '保险等多种增值服务'] },
]

const advantages = [
  { icon: <IoIosPeople />, title: '规模优势', subtitle: 'SCALE ADVANTAGE', content: ['优创商旅是上海市政府五星诚信创建企业, 中国商旅服务知名品牌。'] },
  { icon: <IoBagCheckOutline />, title: '业务优势', subtitle: 'BUSINESS ADVANTAGES', content: ['优创商旅拥有20年商旅服务经验，现已将差旅、旅游二大业务链完全整合，成为中国为数不多的TMC3.0服务企业。为全国企事业单位提供一站式商旅服务。'] },
  { icon: <RiUserHeartLine />, title: '服务优势', subtitle: 'SERVICE ADVANTAGES', content: ['优创商旅差旅、旅游两大运营团队，平均行业经验5年以上。可通过电话、Email、QQ、手机、微信等方式对接，24小时一对一业务顾问，为客户提供更热情、更主动、更专业、更细致的高品质服务。'] },
  { icon: <RiMoneyCnyCircleLine />, title: '价格优势', subtitle: 'PRICE ADVANTAGES', content: ['优创商旅可协助客户与航空公司及酒店签署大客户协议，并且通过自建的SRM供应商采购平台（备注：2019年平台采购交易量为4.5亿元人民币)，以确保我们机票、酒店、火车、签证、用车、旅游上的价格优势，每年可为客户节省至少20%-30%的差旅费用。'] },
  { icon: <RiComputerLine />, title: '系统优势', subtitle: 'SYSTEM ADVANTAGE', content: ['优创商旅自主研发的UCT商旅系统，可通过PC端、微信公众号、系统OA对接等进行差旅预订。并可根据客户要求进行常旅客预订权限设置、审批权限设置、低价提醒等，满足客户不同需求。'] },
]

const solutions = [
  { icon: <TbTie />, title: '首席执行官', subtitle: 'CEO', label: '透明、节省', content: ['在线差旅报告，消费清晰透明', '合理差旅管控，节省差旅费用'] },
  { icon: <GiMoneyStack />, title: '财务', subtitle: 'Finance', label: '专业、合规', content: ['差旅政策制定及执行，全流程管控', '价格规范透明，票据符合审计要求'] },
  { icon: <RiAdminLine />, title: '行政', subtitle: 'Administration', label: '高效、智能', content: ['无缝对接企业系统，提高效率', '网页、微信公众号多平台审批授权'] },
  { icon: <BiShoppingBag />, title: '员工', subtitle: 'Employee', label: '便捷、贴心', content: ['机票、酒店、火车、用车一站式服务', '一对一7*24小时差旅顾问'] },
]

const customs = [
  { icon: <AiOutlineQrcode />, title: '支付场景全覆盖', content: ['月结、充值、现结等', '多种形式可选、贴合企业支付需求'] },
  { icon: <RiVipCrown2Line />, title: '系统直连服务', content: ['打通企业内部OA、HR、财务管理等系统对接', '为企业实现一体化预订、审批、报销、结算等闭环操作'] },
  { icon: <MdOutlineSource />, title: '满足多维度合规管控', content: ['提供定制化的差旅管控方案', '智能预订工具，透明的产品价格体系'] },
  { icon: <TbHeartHandshake />, title: '企业专属差旅服务', content: ['一对一7*24小时差旅顾问', '7*24支持您的差旅需求'] },
  { icon: <TbDeviceDesktopAnalytics />, title: '提供数据分析报表', content: ['专业化的差旅数据分析', '保障企业差旅合规透明'] },
  { icon: <BiWorld />, title: '整合海内外优势资源', content: ['全面覆盖全球航线资源和海内外酒店资源', '另有签证、火车票、用车、保险等全产品资源覆盖'] },
]

export default function Home() {
  return (
    <div className='home'>
      <div className='video-wrapper'>
        <video
          src={video}
          autoPlay
          playsInline
          muted
          loop
        />
        <div className='video-mask'/>
        <div className='title'>
          <h1>企业差旅费用管理解决方案</h1>
          <h1>赋能企业财务数字化转型</h1>
          <h4>服务企业商旅20年, 专注中国商旅服务</h4>
          <h4>省之有道丨控而有方</h4>
        </div>
      </div>
      <div className='demand'>
        <h1>整合全球优质资源, 满足各类商旅需求</h1>
        <h4>高效智能 · 专业合规 · 透明节省 · 便捷贴心</h4>
        <div className='items'>
          {demands.map(demand => (
            <div key={demand.title} className='card'>
              <div className='icon'>{demand.icon}</div>
              <h3>{demand.title}</h3>
              {demand.content.map(p => <h5 key={p}>{p}</h5>)}
            </div>
          ))}
        </div>
      </div>
      <div className='advantage'>
        <h1>服务优势</h1>
        <h4>提供一对一 “差旅顾问+客户经理” 双服务体系, 充分保障服务品质</h4>
        <div className='items'>
          {advantages.map(advantage => (
              <div key={advantage.title} className='card'>
                {advantage.icon}
                <h3>{advantage.title}</h3>
                <h3 className='subtitle'>{advantage.subtitle}</h3>
                {advantage.content.map(p => <h5 key={p}>{p}</h5>)}
              </div>
            ))}
        </div>
      </div>
      <div className='solution'>
        <div className='mask'>
          <h1>全方位一体化差旅解决方案</h1>
          <h4>全国800+企业事业单位客户正在全面使用</h4>
          <div className="items">
            {solutions.map(solution => (
                <div key={solution.title} className='card'>
                  {solution.icon}
                  <h2>{solution.title}</h2>
                  <h4>{solution.subtitle}</h4>
                  <h3>{solution.label}</h3>
                  {solution.content.map(p => <h5 key={p}>{p}</h5>)}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='custom'>
        <h1>企业定制</h1>
        <h4>量身定制，全面着整合，差旅整体效率提升</h4>
        <div className='items'>
          {customs.map(custom => (
              <div key={custom.title} className='card'>
                <div className='icon'>{custom.icon}</div>
                <h3>{custom.title}</h3>
                {custom.content.map(p => <h5 key={p}>{p}</h5>)}
              </div>
            ))}
        </div>
      </div>
      <div className="wechat">
        <div className="items">
          <h1>UCT商旅系统 即可开启您的商务之旅</h1>
          <h4>享受全新差旅体验，打造服务商开源节流模式</h4>
          <img src={require('@images/QRCode.jpg')} alt="二维码" />
        </div>
        <img src={require('@images/phone.png')} alt="微信公众号" />
      </div>
    </div>
  )
}