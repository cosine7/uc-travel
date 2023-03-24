import Banner from '@components/Banner'
import './index.scss'
import { RiMoneyCnyCircleLine } from 'react-icons/ri'
import { AiOutlineStock, AiOutlineIdcard } from 'react-icons/ai'
import { GiDiploma } from 'react-icons/gi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Fragment } from 'react'
import Popup from '@components/Popup'

const benefits = [
  { icon: <RiMoneyCnyCircleLine />, title: '高薪岗位' },
  { icon: <AiOutlineStock />, title: '期权奖励' },
  { icon: <GiDiploma />, title: '学历补贴' },
  { icon: <AiOutlineIdcard />, title: '专业培训' },
]

const jobs = [
  { 
    title: '销售经理',
    educations: ['大专及以上学历', '有电话销售工作经验者优先'],
    responsibilities: [
      '负责日常商旅客户的联系开发;',
      '负责完成对单位客户差旅需求的分析、咨询及服务方案设计;',
      '负责与客户签订合作协议，完成制定的销售指标;'
    ],
    requirements: [
      '大专及以上学历, 有电话销售工作经验者优先;',
      '年龄23岁以上, 男女不限, 户籍不限;',
      '普通话标准、思维敏捷、性格开朗, 责任心强, 抗压力强;',
      '有较强的沟通和协调能力, 能吃苦耐劳, 并具有团队合作精神;'
    ]
  },
  { 
    title: '差旅顾问 - 日文',
    educations: ['大专及以上学历', '2年以上相关工作经验'],
    responsibilities: [
      '负责为线上和线下客户提供机票、酒店预订服务;',
      '负责为线上和线下客户进行机票、酒店的退改签服务;',
      '定时查收Email、QQ, 及时回复客户;',
      '做好工作笔记，跟进每笔业务，维护好每一位客户;'
    ],
    requirements: [
      '大专及以上学历, 2年以上相关工作经验;',
      '年龄25岁以上, 男女不限, 户籍不限;',
      '普通话标准, 口齿清晰, 表达能力强, 具有良好的服务意识和敬业精神;',
      '日语能熟练运用进行工作沟通, 另加1000元技能补贴;'
    ]
  },
  { 
    title: '.NET开发工程师',
    educations: ['全日制统招本科以上学历', '2年以上相关经验'],
    responsibilities: [
      '负责后台服务功能模块的分析、设计、编码及测试工作;',
      '参与系统的需求调研、分析及设计工作;',
      '与项目负责人配合，根据业务需求, 能独立完成产品核心功能开发及产品部署工作;',
      '完成公司交办的其他工作;'
    ],
    requirements: [
      '全日制统招本科学历及以上, 2年以上.NET及相关开发经验;',
      '熟练掌握.NET Framework、.NET Core技术栈, 掌握WebApi、WCF等REST风格服务的开发和部署, 对代码执行效率、性能优化、数据缓存、页面缓存有一定经验;',
      '熟练使用MySQL、SQLServer等主流数据库开发;',
      '熟练使用简单工厂、抽象工厂、AOP、IoC等设计模式;',
      '熟悉Redis、RabbitMQ、ES等中间件技术;',
      '做事积极主动，执行力强，有较强的责任心和事业心，能够承受一定的工作压力，有团队精神;',
      '有商旅行业开发经验者优先;'
    ]
  },
  { 
    title: 'Java开发工程师',
    educations: ['全日制统招本科以上学历', '2年以上相关经验'],
    responsibilities: [
      '负责后台服务功能模块的分析、设计、编码及测试工作;',
      '参与系统的需求调研、分析及设计工作;',
      '与项目负责人配合，根据业务需求，能独立完成产品核心功能开发及产品部署工作;',
      '完成公司交办的其他工作;',
    ],
    requirements: [
      '全日制统招本科学历及2年以上开发经验;',
      '熟悉 Spring、Spring Boot、Spring Cloud 等框架;',
      '熟练使用PL/SQL、MySQL等主流数据库开发;',
      '熟悉设计模式、性能调优等;',
      '熟练掌握Redis、MQ、ES等中间件技术;',
      '做事积极主动, 执行力强, 有较强的责任心和事业心, 能够承受一定的工作压力, 有团队精神;',
      '有商旅行业开发经验者优先;',
    ]
  },
]

export function Career() {
  return (
    <div className="career">
      <Banner
        title="携手坚持 共创奇迹"
        subtitle="persistence & miracle"
        image="career.jpg"
      />
      <div className="benefit">
        <h1>公司福利</h1>
        <h4>CORPORATE BENEFITS</h4>
        <div className="items">
          {benefits.map((benefit, i) => (
            <Fragment key={benefit.title}>
              <div className="card">
                {benefit.icon}
                <h3>{benefit.title}</h3>
              </div>
              {(i + 1) !== benefits.length && <div className="line" />}
            </Fragment>
            ))}
        </div>
      </div>
      <div className="recruit">
        <h1>招贤纳士</h1>
        <h4>JOIN US</h4>
        <div className="items">
          {jobs.map(job => (
            <div className="card" key={job.title}>
              <h3>{job.title}</h3>
              {job.educations.map(p => <h5 key={p}>{p}</h5>)}
              <Popup
                content={
                  <div className='job-description'>
                    <h3>{job.title}</h3>
                    <div className='education'>
                      {job.educations.map((p, i) => (
                        <Fragment key={p}>
                          <p>{p}</p>
                          {(i + 1) !== job.educations.length && <div className='line' />}
                        </Fragment>
                      ))}
                    </div>
                    <h3>岗位职责</h3>
                    <ul>
                      {job.responsibilities.map(p => <li key={p}>{p}</li>)}
                    </ul>
                    <h3>岗位要求</h3>
                    <ul>
                      {job.requirements.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                }
              >
                <button>岗位详情<MdKeyboardArrowRight /></button>
              </Popup>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className="title">
            <h3>如果您对我们感兴趣</h3>
            <h3>欢迎您加入优创商旅大家庭</h3>
          </div>
          <div className="line" />
          <div className="contact">
            <h3>简历投递</h3>
            <h4>应聘简历请发至 a@b.com</h4>
            <h3>联系人</h3>
            <h4>吕小姐</h4>
            <h4>13311111111</h4>
          </div>
        </div>
      </div>
    </div>
  )
}