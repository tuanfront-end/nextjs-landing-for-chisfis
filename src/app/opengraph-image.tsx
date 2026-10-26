import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { currentVersion } from '@/constant'

export const alt = 'Chisfis, a travel booking template for Next.js and HTML'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const asset = (file: string) => readFile(join(process.cwd(), 'src/og', file))

const toDataUri = (data: Buffer) =>
  `data:image/jpeg;base64,${data.toString('base64')}`

export default async function Image() {
  const [fontRegular, fontMedium, stays, realEstate] = await Promise.all([
    asset('google-sans-flex-400.woff'),
    asset('google-sans-flex-500.woff'),
    asset('stays.jpg'),
    asset('real-estate.jpg'),
  ])

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#f8fafc',
        fontFamily: 'Google Sans Flex',
        color: '#0f172a',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 640,
          padding: '64px 0 64px 72px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg width="34" height="40" viewBox="0 0 26 32">
            <path
              d="M24.4444 14.0325C24.4444 21.4807 12.9444 29.3945 12.9444 29.3945C12.9444 29.3945 1.44444 21.4807 1.44444 14.0325C1.44444 7.51522 6.84722 2.39453 12.9444 2.39453C19.0417 2.39453 24.4444 7.51522 24.4444 14.0325Z"
              fill="#2563eb"
            />
            <circle cx="13" cy="15" r="4" fill="white" />
          </svg>
          <span style={{ fontSize: 36, fontWeight: 500 }}>Chisfis</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              alignItems: 'center',
              gap: 12,
              padding: '6px 18px 6px 6px',
              borderRadius: 999,
              background: 'white',
              border: '1px solid #e2e8f0',
              fontSize: 20,
              color: '#334155',
            }}
          >
            <span
              style={{
                padding: '4px 14px',
                borderRadius: 999,
                background: '#2563eb',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {currentVersion}
            </span>
            Now with an HTML edition
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 28,
              fontSize: 64,
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: -1.5,
            }}
          >
            <span>Travel booking</span>
            <span>template for</span>
            <span>Next.js &amp; HTML</span>
          </div>
        </div>

        <div style={{ fontSize: 22, color: '#475569' }}>
          Stays · Experiences · Car rentals · Flights · Real estate
        </div>
      </div>

      <div style={{ display: 'flex', position: 'relative', flex: 1 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={toDataUri(realEstate)}
          alt=""
          width={360}
          height={401}
          style={{
            position: 'absolute',
            top: 230,
            left: 230,
            borderRadius: 24,
            border: '8px solid #e2e8f0',
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={toDataUri(stays)}
          alt=""
          width={380}
          height={423}
          style={{
            position: 'absolute',
            top: 64,
            left: 40,
            borderRadius: 24,
            border: '8px solid white',
            boxShadow: '0 24px 48px rgba(15, 23, 42, 0.18)',
          }}
        />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Google Sans Flex',
          data: fontRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Google Sans Flex',
          data: fontMedium,
          weight: 500,
          style: 'normal',
        },
      ],
    },
  )
}
