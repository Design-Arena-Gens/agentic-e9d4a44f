import { NextResponse } from 'next/server'
import { getRandomTopic, generateVideoContent } from '@/lib/contentGenerator'

export async function POST() {
  try {
    const topic = getRandomTopic()
    const content = generateVideoContent(topic)

    return NextResponse.json(content)
  } catch (error) {
    console.error('Error generating content:', error)
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
}
