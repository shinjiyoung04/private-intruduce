import TeamSection from '../components/TeamSection'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ 상단 네비게이션 바 (텍스트 메뉴형) */}
      <nav className="bg-white shadow fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* 로고 */}
            <div className="text-xl font-bold text-blue-700">Signchain</div>
            {/* 텍스트 메뉴 */}
            <div className="flex gap-6 text-gray-700 text-sm">
              <span className="hover:text-blue-600 cursor-pointer">팀 소개</span>
              <span className="hover:text-blue-600 cursor-pointer">Git Hub 저장소</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ 메인 컨텐츠 (여백 확보) */}
      <main className="pt-20 px-4">
        <section id="team">
          <TeamSection />
        </section>
      </main>
    </div>
  )
}
