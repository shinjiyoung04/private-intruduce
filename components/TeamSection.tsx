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
  name: string
  id: string
  role: string
  github: string
  part: string
  icon: React.ReactNode
}

const members: Member[] = [
  {
    name: '개발자 A',
    id: '20231234',
    role: 'JWT 세션 관리 및 MongoDB 설계',
    github: 'https://github.com/devA',
    icon: <FaKey size={20} />,
    part: '인증 & 사용자 관리',
  },
  {
    name: '개발자 B',
    id: '20231235',
    role: 'Google OTP 연동 및 로그인 UI 구현',
    github: 'https://github.com/devB',
    icon: <FaFingerprint size={20} />,
    part: '인증 & 사용자 관리',
  },
  {
    name: '개발자 C',
    id: '20231236',
    role: 'PDF 업로드 및 SHA-256 해시 처리',
    github: 'https://github.com/devC',
    icon: <FaServer size={20} />,
    part: '계약서 처리 & 보안',
  },
  {
    name: '개발자 D',
    id: '20231237',
    role: 'AES-256/RSA 키 암호화 및 인증서 처리',
    github: 'https://github.com/devD',
    icon: <FaUserShield size={20} />,
    part: '계약서 처리 & 보안',
  },
  {
    name: '개발자 E',
    id: '20231238',
    role: 'QR 인증 UI, 계약서 열람 인터페이스',
    github: 'https://github.com/devE',
    icon: <FaQrcode size={20} />,
    part: '프론트엔드 & UI',
  },
  {
    name: '개발자 F',
    id: '20231239',
    role: '손글씨 서명 UI 및 서명 상태 처리',
    github: 'https://github.com/devF',
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
        <h1 className="text-3xl font-bold text-blue-700">전자서명계약서 페이지</h1>
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
                key={member.id}
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
                <div className="bg-white shadow-lg rounded-xl px-6 py-5 w-full max-w-md border border-gray-200 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.id}</p>
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
