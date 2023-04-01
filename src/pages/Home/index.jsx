import video from '../../assets/video/welcome.mp4'
import './index.scss'
import { ImAirplane } from 'react-icons/im'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FiSmartphone } from 'react-icons/fi'
import { FaHotel } from 'react-icons/fa'
import { GiPalmTree, GiStack } from 'react-icons/gi'
import { MdOutlineAirplaneTicket, MdOutlineSource } from 'react-icons/md'
import { AiOutlinePhone, AiOutlineQrcode } from 'react-icons/ai'
import { SiAmazonapigateway } from 'react-icons/si'
import { BiWorld } from 'react-icons/bi'
import { TbHeartHandshake, TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { RiUserHeartLine, RiComputerLine, RiMoneyCnyCircleLine, RiVipCrown2Line } from 'react-icons/ri'

const demands = [
  { icon: <ImAirplane />, title: '机票', content: ['覆盖全球400多家航空公司', '各大航空公司协议价', '支持在线预订、退改'] },
  { icon: <FaHotel />, title: '酒店', content: ['覆盖全球140万家酒店', '国内7000家酒店协议价', '支持多供应商比价服务'] },
  { icon: <GiPalmTree />, title: '旅游', content: ['超10年企业定制旅游经验', '掌握全球目的地优质资源', '奖励、团建、会务和参访旅游'] },
  { icon: <GiStack />, title: '增值服务', content: ['机票、酒店、签证、用车、火车票', '汽车票、用餐服务、机场服务', '保险等多种增值服务'] },
]

const advantages = [
  { icon: <MdOutlineAirplaneTicket />, title: '规模优势', subtitle: 'SCALE ADVANTAGE', content: ['优创商旅是上海市政府五星诚信创建企业, 中国商旅服务知名品牌。'] },
  { icon: <RiUserHeartLine />, title: '业务优势', subtitle: 'BUSINESS ADVANTAGES', content: ['优创商旅拥有20年商旅服务经验，现已将差旅、旅游二大业务链完全整合，成为中国为数不多的TMC3.0服务企业。为全国企事业单位提供一站式商旅服务。'] },
  { icon: <RiComputerLine />, title: '服务优势', subtitle: 'SERVICE ADVANTAGES', content: ['优创商旅差旅、旅游两大运营团队，平均行业经验5年以上。可通过电话、Email、QQ、手机、微信等方式对接，24小时一对一业务顾问，为客户提供更热情、更主动、更专业、更细致的高品质服务。'] },
  { icon: <RiMoneyCnyCircleLine />, title: '价格优势', subtitle: 'PRICE ADVANTAGES', content: ['优创商旅可协助客户与航空公司及酒店签署大客户协议，并且通过自建的SRM供应商采购平台（备注：2019年平台采购交易量为4.5亿元人民币)，以确保我们机票、酒店、火车、签证、用车、旅游上的价格优势，每年可为客户节省至少20%-30%的差旅费用。'] },
  { icon: <RiMoneyCnyCircleLine />, title: '系统优势', subtitle: 'SYSTEM ADVANTAGE', content: ['优创商旅自主研发的UCT商旅系统，可通过PC端、微信公众号、系统OA对接等进行差旅预订。并可根据客户要求进行常旅客预订权限设置、审批权限设置、低价提醒等，满足客户不同需求。'] },
]

const solutions = [
  { icon: <HiOutlineDesktopComputer />, title: 'PC预订', content: '通过ISO27001信息安全管理体系认证的差旅管理公司' },
  { icon: <FiSmartphone />, title: 'APP预订', content: '定义全新差旅方式的商旅APP, 授权审批、航班查询、机票预订、在线值机选座退改签等航班动态一手掌握' },
  { icon: <AiOutlinePhone />, title: 'OFFLINE预订', content: '致电02152555501可7x24小时服务' },
  { icon: <SiAmazonapigateway />, title: 'API对接', content: '丰富API接口, HTTPS全流程加密, 对接企业OA、财务、HR等系统, 实现高 效、安全便捷的机票查询、预订等服务' },
]

const customs = [
  { icon: <AiOutlineQrcode />, title: '旅客值机服务', content: '预留机位, 提前值机, 二维码过安检' },
  { icon: <RiVipCrown2Line />, title: 'VIP全程跟进服务', content: '重要客户航班提前关注服务, 安排接送机服务, 机场VIP服务, 酒店入住贵宾礼仪服务' },
  { icon: <TbHeartHandshake />, title: '月结管家服务', content: '企业差旅一对一专人服务, 线上线下相结合服务' },
  { icon: <MdOutlineSource />, title: '航司酒店大客户签约服务', content: '配合资源优势签约服务, 降低机票酒店差旅成本' },
  { icon: <TbDeviceDesktopAnalytics />, title: '差旅数据分析服务', content: '一目了然差旅数据中英文服务, 分析差旅报表服务, 配合指定差旅制度服务' },
  { icon: <BiWorld />, title: '整合海内外优势资源', content: '全面覆盖全球航线资源, 140万+海内外酒店资源另有签证、火车票、用车、保险等全产品资源覆盖' },
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
          <h1>核心价值</h1>
          <h4>降本增效，便捷出行</h4>
          <div className="items">
            {solutions.map(solution => (
                <div key={solution.title} className='card'>
                  {solution.icon}
                  <h3>{solution.title}</h3>
                  <h5>{solution.content}</h5>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='custom'>
        <h1>增值服务</h1>
        <h4>量身定制，全面整合，差旅整体效率提升</h4>
        <div className='items'>
          {customs.map(custom => (
              <div key={custom.title} className='card'>
                <div className='icon'>{custom.icon}</div>
                <h3>{custom.title}</h3>
                <h5>{custom.content}</h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}