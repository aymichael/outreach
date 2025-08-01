
// components/EventBox.jsx
import React from 'react';
import Link from 'next/link';

export default function EventBox({ event }) {
    // Helper to format date ranges
    const formatDates = (dates) => {
        if (dates.length === 1) return dates[0];
        return dates.slice(0, -1).join(', ') + ' and ' + dates[dates.length - 1];
    };
    const haveMetadata = event.dates || event.time || event.speakers || event.target || event.medium || event.duration;
    console.log(String(haveMetadata));
    return (
        <div className="rounded-xl shadow-md ring-2 ring-black/5 p-6 mb-6 bg-white transition-all hover:shadow-lg">
            {/* Event Header */}
            <div className="border-b border-gray-300 pb-3 mb-3">
                <div className="flex justify-between items-start gap-8">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold">{event.title}</h1>
                        {event.subtitle && (
                            <h2 className="text-lg md:text-xl font-bold text-indigo-600 mt-1">
                                {event.subtitle}
                            </h2>
                        )}
                    </div>
                </div>
            </div>
            {/* Event Details */}
            <div className={`grid ${haveMetadata ? "lg:grid-cols-3 gap-6" : ""} `}>
                {/* Left Column - Metadata */}
                <div className="lg:col-span-1 space-y-4">
                    {event.dates && (
                        <div>
                            <h3 className="font-bold text-base md:text-lg">Date</h3>
                            <p className="text-base md:text-lg">
                                {formatDates(event.dates)}
                            </p>
                        </div>
                    )}

                    {event.time && (
                        <div>
                            <h3 className="font-bold text-base md:text-lg">Time</h3>
                            <p className="text-base md:text-lg">
                                {event.time}
                            </p>
                        </div>
                    )}

                    {event.speakers && (
                        <div>
                            <h3 className="font-bold text-base md:text-lg">
                                {event.speakers.length > 1 ? 'Speakers' : 'Speaker'}
                            </h3>
                            <p className="text-base md:text-lg">
                                {event.speakers.join(', ')}
                            </p>
                        </div>
                    )}

                    {event.target && (
                        <div>
                            <h3 className="font-bold text-base md:text-lg">Target</h3>
                            <p className="text-base md:text-lg">{event.target}</p>
                        </div>
                    )}

                    {event.medium && (
                        <div>
                            <h3 className="font-bold text-base md:text-lg">Medium of Instruction</h3>
                            <p className="text-base md:text-lg">{event.medium}</p>
                        </div>
                    )}

                    {event.duration && (
                        <div>
                            <h3 className="font-bold text-base md:text-lg">Duration</h3>
                            <p className="text-base md:text-lg">{event.duration}</p>
                        </div>
                    )}
                </div>

                {/* Right Column - Content */}
                <div className="lg:col-span-2 space-y-4">
                    {event.introduction && (
                        <div>
                            <h3 className="font-bold text-base md:text-lg">Introduction</h3>
                            <p className="whitespace-pre-line text-base md:text-lg">{event.introduction}</p>
                        </div>
                    )}
                    {event.abstract && (
                        <div>
                            <h3 className="font-bold text-base md:text-lg">Abstract</h3>
                            <p className="whitespace-pre-line text-base md:text-lg">{event.abstract}</p>
                        </div>
                    )}
                </div>
            </div>
            {/* Extra Cases */}
            {event.extraTitle && (
                <div className="mt-4 grid md:grid-cols-2 gap-4 w-full">
                    {event.extraTitle.map((title, idx) => (
                        <div key={idx} className="bg-blue-50 p-4 rounded-lg ring-2 ring-blue-100">
                            <h3 className="font-bold text-base md:text-lg text-blue-500">{title}</h3>
                            {event.extraContentTitle && (
                                event.extraContentTitle.map((contentTitle, contentIdx) => (
                                    <div key={contentIdx} className="flex flex-col">
                                        <h4 className="font-bold text-base md:text-lg mr-1">
                                            {contentTitle}
                                        </h4>
                                        <p className="text-base md:text-lg whitespace-pre-line">{event.extraContent[idx][contentIdx]}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                </div>
            )}
            {event.externalLink && (
                <div className="mt-4">
                    <p className="text-base md:text-lg">
                        {event.externalLink[0]} <a href={event.externalLink[1]} className="text-blue-600 hover:underline">here</a> {event.externalLink[2]}</p>
                </div>
            )}
            {event.remark && (
                <div className="mt-4">
                    <p className="text-sm md:text-base text-gray-600 whitespace-pre-line">{event.remark}</p>
                </div>
            )}
        </div>
    );
};
