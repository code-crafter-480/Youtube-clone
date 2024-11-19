import React, { useState } from "react";



const VideoDescription = ({ views, uploadTime, description, hashtags, comments }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mt-4 bg-gray-100 rounded-lg p-5">
            {/* Video Stats */}
            <div className="flex items-center text-gray-600 font-medium border-b pb-3 mb-3">
                <span className="mr-5">{views} views</span>
                <span className="mr-5">{uploadTime}</span>
                <span className="">{`${comments} comments`}</span>
            </div>

            {/* Description Section */}
            <div className="text-gray-800 text-sm leading-relaxed">
                {isExpanded ? (
                    <>
                        <div className="mb-3">
                            <h3 className="font-bold text-gray-700 mb-2">Description:</h3>
                            <p>{description}</p>
                        </div>

                        {hashtags.length > 0 && (
                            <div className="mb-3">
                                <h3 className="font-bold text-gray-700 mb-2">Tags:</h3>
                                <p>
                                    {hashtags.map((tag, index) => (
                                        <span key={index} className="block text-blue-400 ">
                                            {`#${tag}`}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        )}

                        <span
                            className="text-blue-500 font-medium cursor-pointer mt-3 inline-block"
                            onClick={() => setIsExpanded(false)}
                        >
                            Show Less
                        </span>
                    </>
                ) : (
                    <>
                        <p>
                            {description?.slice(0, 150)}...
                            <span
                                className="text-blue-600 font-medium cursor-pointer"
                                onClick={() => setIsExpanded(true)}
                            >
                                Show More
                            </span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default VideoDescription;
