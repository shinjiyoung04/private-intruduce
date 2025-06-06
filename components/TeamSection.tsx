'use client'

import React from 'react'
import {
  FaKey,
  FaFingerprint,
  FaServer,
  FaUserShield,
  FaQrcode,
  FaFileSignature,
  FaGithub,
} from 'react-icons/fa'

interface Member {
  name: string  // 학번
  realName: string  // 실제 이름
  role: string
  github: string
  part: string
  icon: React.ReactNode
}

const members: Member[] = [
  {
    name: '92313659',
    realName: '정은수',
    role: '로그인/회원가입 API, JWT 기반 세션 관리, MONGODB 사용자 저장 구조 설계',
    github: 'https://github.com/jungeunsu',
    icon: <FaKey size={20} />,
    part: '인증 & 사용자 관리',
  },
  {
    name: '92313295',
    realName: '김다예',
    role: 'GOOGLE OTP 연동, 로그인 페이지 UI, 인증 흐름 테스트 시나리오 작성',
    github: 'https://github.com/KIMDAYE04/part-B',
    icon: <FaFingerprint size={20} />,
    part: '인증 & 사용자 관리',
  },
  {
    name: '92313726',
    realName: '홍정현',
    role: 'pdf 업로드 및 처리, sha-256 해시 생성 및 무결성 검증 로직, 프로젝트 코드 통합 및 추가 기능 설계',
    github: 'https://github.com/anon418/forge-crypto-demo',
    icon: <FaServer size={20} />,
    part: '계약서 처리 & 보안',
  },
  {
    name: '92313491',
    realName: '이서연',
    role: '사용자와 CA 인증서 생성, 파일 암호화, 전자서명과 전자봉투, 수신자 복호화와 전자서명 검증',
    github: 'https://github.com/haru01-hub/crypto-team-project',
    icon: <FaUserShield size={20} />,
    part: '계약서 처리 & 보안',
  },
  {
    name: '92313415',
    realName: '안지영',
    role: '계약서 작성/열람 화면, QR 인증 UI+QR 리더기 연동, 사용자 인증 흐름 시각화',
    github: 'https://github.com/jiyoung5566',
    icon: <FaQrcode size={20} />,
    part: '프론트엔드 & UI',
  },
  {
    name: '92313403',
    realName: '신지영',
    role: '손글씨 서명 UI, 서명된 해시값 처리 및 전송, 전자서명 상태 표시 화면, 팀원 소개 페이지(본 페이지) 제작',
    github: 'https://github.com/shinjiyoung04/sign',
    icon: <FaFileSignature size={20} />,
    part: '프론트엔드 & UI',
  },
]

export default function TeamSection() {
  const grouped = members.reduce<Record<string, Member[]>>((acc, cur) => {
    acc[cur.part] = acc[cur.part] || []
    acc[cur.part].push(cur)
    return acc
  }, {})

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-700">전자서명계약서 페이지 제작 프로젝트</h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          &lsquo;보안성과 사용자 편의성을 모두 만족시키는 차세대 전자계약서 페이지 개발&rsquo;을 목표로 협업하고 있습니다.
        </p>
      </div>

      {Object.keys(grouped).map((part) => (
        <div key={part} className="mb-16">
          <h2 className="text-xl font-semibold text-blue-600 mb-6 border-b border-blue-200 pb-2">
            {part}
          </h2>
          <ul className="space-y-12">
            {grouped[part].map((member, idx) => (
              <li
                key={member.name}
                className={`flex items-start ${
                  idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                } gap-6`}
              >
                <div className="flex flex-col items-center relative z-20">
                  <div className="bg-white border-4 border-blue-500 rounded-full p-3 shadow-lg">
                    {member.icon}
                  </div>
                  <div className="h-full w-px bg-gray-300" />
                </div>
                <div
                  className={`bg-white shadow-lg rounded-xl px-8 py-6 w-full max-w-2xl border border-gray-200 hover:shadow-xl transition-all ${
                    ['92313659', '20231236', '92313415'].includes(member.name)
                      ? 'text-right'
                      : ''
                  }`}
                >
                  <h3 className="text-lg font-bold text-gray-800">
                    {member.name} {member.realName}
                  </h3>
                  <p className="text-sm text-gray-700 mt-2">{member.role}</p>
                  <div className="mt-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white py-1.5 px-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
                    >
                      <FaGithub className="text-base" /> GitHub 바로가기
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
