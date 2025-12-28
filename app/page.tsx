'use client'

import { useState } from 'react'
import { format } from 'date-fns'

interface VideoContent {
  topic: string
  category: string
  script: string
  scenes: Array<{
    sceneNumber: number
    duration: string
    narration: string
    imagePrompt: string
  }>
  voiceoverScript: string
  musicMood: string
  title: string
  description: string
  tags: string[]
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [videoContent, setVideoContent] = useState<VideoContent | null>(null)
  const [error, setError] = useState('')

  const generateContent = async () => {
    setLoading(true)
    setError('')
    setVideoContent(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Failed to generate content')
      }

      const data = await response.json()
      setVideoContent(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const downloadJSON = () => {
    if (!videoContent) return

    const dataStr = JSON.stringify(videoContent, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `youtube-video-${format(new Date(), 'yyyy-MM-dd')}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            AI YouTube Content Creator
          </h1>
          <p className="text-gray-400 text-lg">
            Generate professional YouTube video scripts daily
          </p>
          <p className="text-gray-500 mt-2">
            {format(new Date(), 'EEEE, MMMM dd, yyyy')}
          </p>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={generateContent}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 disabled:scale-100 shadow-lg"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Content...
              </span>
            ) : (
              "Generate Today's Video Content"
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-200 px-6 py-4 rounded-lg mb-8">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {/* Content Display */}
        {videoContent && (
          <div className="space-y-6">
            {/* Download Button */}
            <div className="flex justify-end">
              <button
                onClick={downloadJSON}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
              >
                Download JSON
              </button>
            </div>

            {/* Topic & Category */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Topic & Category</h2>
              <p className="text-xl mb-2"><span className="font-semibold">Category:</span> {videoContent.category}</p>
              <p className="text-xl"><span className="font-semibold">Topic:</span> {videoContent.topic}</p>
            </div>

            {/* YouTube Metadata */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-red-400">YouTube Metadata</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-400">Title:</h3>
                  <p className="text-white bg-gray-900/50 p-3 rounded">{videoContent.title}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-400">Description:</h3>
                  <p className="text-white bg-gray-900/50 p-3 rounded whitespace-pre-line">{videoContent.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-400">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {videoContent.tags.map((tag, idx) => (
                      <span key={idx} className="bg-red-600/30 text-red-200 px-3 py-1 rounded-full text-sm border border-red-500/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Script */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Video Script (60-90s)</h2>
              <p className="text-white leading-relaxed bg-gray-900/50 p-4 rounded whitespace-pre-line">{videoContent.script}</p>
            </div>

            {/* Scenes */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Scene Breakdown</h2>
              <div className="space-y-4">
                {videoContent.scenes.map((scene, idx) => (
                  <div key={idx} className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
                    <h3 className="font-bold text-lg mb-3 text-purple-400">Scene {scene.sceneNumber} ({scene.duration})</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold text-yellow-400">Narration:</p>
                        <p className="text-gray-300">{scene.narration}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-400">AI Image Prompt:</p>
                        <p className="text-gray-300 italic">{scene.imagePrompt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Voiceover Script */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Voiceover Script</h2>
              <p className="text-sm text-gray-400 mb-3">Male deep voice • Clear pronunciation • Emotionally engaging</p>
              <p className="text-white leading-relaxed bg-gray-900/50 p-4 rounded whitespace-pre-line">{videoContent.voiceoverScript}</p>
            </div>

            {/* Music Mood */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Background Music</h2>
              <p className="text-xl"><span className="font-semibold">Mood:</span> {videoContent.musicMood}</p>
            </div>

            {/* Instructions */}
            <div className="bg-blue-900/30 backdrop-blur rounded-lg p-6 border border-blue-500">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Next Steps</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Download the JSON file using the button above</li>
                <li>Use the AI image prompts in Midjourney, DALL-E, or Runway Gen-2</li>
                <li>Generate voiceover using ElevenLabs or Google TTS (Hindi voice)</li>
                <li>Import scenes and voiceover into Pictory or Runway</li>
                <li>Add background music matching the mood</li>
                <li>Export final video and upload to YouTube with provided metadata</li>
              </ol>
            </div>
          </div>
        )}

        {/* Info Cards */}
        {!videoContent && !loading && (
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-red-400">Auto Topic Selection</h3>
              <p className="text-gray-400">Daily rotating topics: Motivation, Dark Psychology, Mystery, Facts, AI, Spiritual, Horror, Business</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Professional Scripts</h3>
              <p className="text-gray-400">60-90 second scripts with hooks, emotional engagement, and CTAs in Hinglish</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Ready to Deploy</h3>
              <p className="text-gray-400">Complete with AI prompts, voiceover scripts, music suggestions, and SEO metadata</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
