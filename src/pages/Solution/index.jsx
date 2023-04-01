import './index.scss'
import { ImAirplane } from 'react-icons/im'
import { FaHotel, FaPassport, FaCar, FaMoneyCheckAlt } from 'react-icons/fa'
import { MdTrain, MdOutlineCalendarMonth } from 'react-icons/md'
import { AiFillInsurance, AiOutlineControl } from 'react-icons/ai'
import { RiReservedLine } from 'react-icons/ri'
import { BsClipboardData } from 'react-icons/bs'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { Fragment } from 'react'
import { CgFormatSeparator } from 'react-icons/cg'
import { BiAbacus } from 'react-icons/bi'
import Banner from '../../components/Banner'

const businesses = [
  { icon: <ImAirplane />, title: '机票', content: ['国内及国际多家航空公司官网直运价且引入渠道比价', '国内外机票实时查询, 多渠道快捷预订, 全程关怀服务', '协助企业与航空公司签定大客户协议且承接托管服务', '专业差旅顾问提供退票、改签等7*24小时不间断优质服务保障'] },
  { icon: <FaHotel />, title: '酒店', content: ['覆盖全球200多个国家及地区超60万家全星级酒店房源', '小程序或人工服务, 快速预定有保证, 支持预付或现付, 费用结算灵活', '专业差旅顾问提供预订、退改等7*24小时不间断优质服务保障', '协助企业与酒店签定大客户协议且承接托管服务'] },
  { icon: <MdTrain />, title: '火车', content: ['提供全国高铁、动车与普通列车的查询及预订选座', '同步12306官网直联信息, 票源实时准确有保证', '实时余票监控、智能抢票, 确保快速抢票占座', '专业差旅顾问提供7*24小时不间断优质服务保障'] },
  { icon: <FaPassport />, title: '签证', content: ['提供展览活动、团建年会、奖励旅游等各类会务的策划与执行服务', '专业策划师协助企业定制、策划与实施国内外奖励旅游、商务考察出行计划', '全程实施严格的标准化流程管理控制', '依托大旅游生态产业链, 提供优质整合服务, 专业合规保护及风险'] },
  { icon: <AiFillInsurance />, title: '保险', content: ['咨询和协助办理中国人赴各国进行商务活动的签证', '各地机场接送机和市内用车，各类车型均可提供', '接受商旅VIP客户的各项旅游咨询', '有为商旅客户提供大型团队的丰富经验, 能提供全国各地出发的团队机票预订'] },
  { icon: <FaCar />, title: '用车', content: ['覆盖国内打车, 机场、火车站接送等多种需求', '经济型/舒适型/商务型/豪华型, 多种选择', '预订便捷, 满足企业不同用车场景需求', '丰富的车辆资源整合, 给您机、酒、车一站式的优质出行预订体验'] },
]

const systems = [
  { icon: <RiReservedLine />, content: ['便捷预订', '高效审核'] },
  { icon: <AiOutlineControl />, content: ['合规管控', '智能控制'] },
  { icon: <BsClipboardData />, content: ['掌握开支', '费用合理'] },
  { icon: <FaMoneyCheckAlt />, content: ['灵活支付', '明细清晰'] },
  { icon: <TbDeviceDesktopAnalytics />, content: ['数据分析', '持续优化'] },
]

const travels = [
  { title: '预定前', content: [{ title: '差标设置', content: ['系统设置机票、酒店、火车、用车等差旅标准', '自定义分级管控，按职级制定不同的差旅标准'] }, { title: '出差申请', content: ['员工通过系统提交申请，说明出行需求及目的', '可实时在线一键审批并可预知员工出差行为'] }]},
  { title: '预定中', content: [{ title: '差标设置', content: ['预订自动匹配员工等级差标，自动判别违约预订行为', '若有违规智能识别预定场景是否需要二次审批'] }, { title: '超额预警', content: ['符合差标自动出票并自动进行定单及行程提醒', '预设风控阈值，差旅累计超阈值，系统自动预警'] }]},
  { title: '预定后', content: [{ title: '实时报表', content: ['管理后台实时查看商旅订单与数据报表', '系统分析企业差旅管理弱项，指导企业优化差旅成本'] }, { title: '智能报销', content: ['一键导入关联商旅订单,并生成报销申请单', '发票智慧识别真伪，在线存档', '系统智能判断报销审批流程，实现自动流转'] }]},
]

const capitals = [
  { icon: <MdOutlineCalendarMonth />, title: '月结额度', content: ['给予符合条件的单位客户差旅月结额度', '为单位客户的出行提供全额垫资'] },
  { icon: <CgFormatSeparator />, title: '分账管理', content: ['按成本中心归集, 按BU归集, 按部门归集', '按项目编号归集, 按子公司、分公司归集'] },
  { icon: <BiAbacus />, title: '报销凭证', content: ['提供行程单或全额发票', '优化单位客户财务报销流程, 做到透明合规'] },
]

const connections = ['单点登录', '提前审批对接', '延后审批对接', '纯API对接']

export default function Solution() {
  return (
    <div className='solution'>
      <Banner
        image='solution.jpeg'
        title='解决方案'
        subtitle='solution'
        content={[
          '一切差旅管理工作都可以从商旅客开始。无论是行程制定、账单管理、企业授信,',
          '团队成员以更高效的协作方式，为运营管理目标不断创造成果。',
        ]}
      />
      <div className="business">
        <h1>商旅产品解决方案</h1>
        <h5>为企业用户提供机票、酒店、火车、签证、保险、旅游等一站式差旅服务</h5>
        <div className='items'>
          {businesses.map(business => (
            <div key={business.title} className='card'>
              <div className='icon'>{business.icon}</div>
              <div className='text'>
                <h3>{business.title}</h3>
                {business.content.map(p => <h5 key={p}>{p}</h5>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="system">
        <h1>UCT商旅系统</h1>
        <h5>优创商旅自主研发精算盘商旅系统, 对接主流费控系统, 宗旨 "帮企业客户, 控差旅标准, 省差旅费用", 可省30%差旅费用</h5>
        <div className='items'>
          {systems.map(system => (
            <div key={system.content[0]} className='card'>
              <div className='icon'>{system.icon}</div>
              {system.content.map(p => <h3 key={p}>{p}</h3>)}
            </div>
          ))}
        </div>
      </div>
      <div className="travel">
        <div className="mask">
          <h1>费控系统解决方案</h1>
          <h5>通过显性成本 (机票、酒店、高铁等大客户协议低价) + 隐性成本 (审批、合规、差标等) 双重精细化管控, 有效提高商旅效率近60%, 节省差旅成本近30%</h5>
          <div className="items">
            {travels.map(travel => (
              <div key={travel.title} className='card'>
                <h2>{travel.title}</h2>
                {travel.content.map(content => (
                  <Fragment key={content.title}>
                    <h3>{content.title}</h3>
                    {content.content.map(p => <h5 key={p}>{p}</h5>)}
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="capital">
          <h1>资金结算解决方案</h1>
          <h5>多种金融垫资服务，为企业解决差旅现付的资金困扰</h5>
          <div className='items'>
            {capitals.map(capital => (
              <div key={capital.title} className='card'>
                <div className="line" />
                <div className="title">
                  <div className='icon'>{capital.icon}</div>
                  <h3>{capital.title}</h3>
                </div>
                {capital.content.map(p => <h5 key={p}>{p}</h5>)}
              </div>
            ))}
        </div>
      </div>
      <div className="connection">
        <h1>商旅系统对接方案</h1>
        <h5>致力将UCT商旅系统打造为场景化、定制化、人性化为特征的智能商旅系统</h5>
        <h3>对接方式</h3>
        <div className='wrapper'>
          <div className="line" />
          {connections.map(connection => <div key={connection} className='rect'>{connection}</div>)}
        </div>
      </div>
    </div>
  )
}