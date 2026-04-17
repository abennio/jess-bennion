import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Root.css";
import { Outlet, Link } from "react-router-dom";
import Tile from "./Tiles/Tile.js";

// Importing images
import pigeon from "../portfolio-images/Birkenhead/Birkenhead-Mural.png";
import rebrand from "../portfolio-images/UoCRebrand/UoC-rebrand-tile.png";
import christmas from "../portfolio-images/UoCChristmas/UoC-Christmas-Card.png";
import radio from "../portfolio-images/Radio/radio-logo-tile.png";
import zoo from "../portfolio-images/ChesterZoo/Chester-Zoo.png";
import shoutOut from "../portfolio-images/StudentShoutOut/student-shout-out-tile.png";
import cup from "../portfolio-images/KeepCup/Keep-Cup.png";
import student from "../portfolio-images/Emails/student-shoutout-tile.png";
import lady from "../portfolio-images/IntroVideos/lady.png";
import studentNews from "../portfolio-images/StudentNews/student-news-tile.png";
import phone from "../portfolio-images/CWAC/CWAC.png";
import icons from "../portfolio-images/Icons/icons-portfolio-tile.png";
import women from "../portfolio-images/WomenInTech/women-in-tech.png";
import grosvenor from "../portfolio-images/UoCTimeline/Grosvenor-mural.png";
import clearing from "../portfolio-images/Clearing/clearing-tile.png";
import building from "../portfolio-images/ChesterMural/Chester-Mural.png";
import motionReel from "../portfolio-images/IntroVideos/JB-Motion-Reel.mp4";

const COLUMN_REPEAT_COUNT = 5;
const COLUMN_SPEEDS = [0.9, 1.35, 1.12];
const COLUMN_EASING = [0.09, 0.18, 0.12];
const COLUMN_START_OFFSETS = [0.18, 0.42, 0.27];
const FEATURED_SCROLL_DISTANCE = 720;
const FEATURED_COLUMN_INDEX = 1;
const FEATURED_TILE_INDEX = 3;
const COLUMN_MOTION_DELAY = 220;
const FEATURED_TRACK_CENTER_RATIO = 0.5;
const FEATURED_HERO_VERTICAL_OFFSET = -5;
// Replace with an imported MP4 when the final hero video is ready.
const FEATURED_VIDEO_SRC = motionReel;

const FEATURED_PROJECT = {
  id: "featured-video",
  title: "Featured motion piece",
  label: "Hero video placeholder",
  subtitle:
    "A looping, silent banner that can be unmuted when the final video is added.",
  alt: "Placeholder for a featured hero video tile",
  isFeatured: true,
};

const projects = [
  {
    path: "/birkenhead",
    image: pigeon,
    alt: "Birkenhead Mural",
    title: "Birkenhead Mural",
  },
  {
    path: "/uoc-rebrand",
    image: rebrand,
    alt: "A shield with thick black lines",
    title: "University of Chester Rebrand",
  },
  {
    path: "/uoc-christmas",
    image: christmas,
    alt: "An illustration of two semi-detached houses with Christmas decorations and snow",
    title: "Christmas Card",
  },
  {
    path: "/radio",
    image: radio,
    alt: "Chester Student Radio logo",
    title: "Student Radio",
  },
  {
    path: "/chester-zoo",
    image: zoo,
    alt: "Chester Zoo",
    title: "Chester Zoo",
  },
  {
    path: "/student-shout-out",
    image: shoutOut,
    alt: "The words 'Student Shout Out' on their own separate line in white writing with a black block behind each word.",
    title: "Student Shout Out",
  },
  {
    path: "/keep-cup",
    image: cup,
    alt: "Illustration of the Binks building at University of Chester",
    title: "Keep Cup",
  },
  {
    path: "/emails",
    image: student,
    alt: "Logo of a megaphone and the words Student Shout Out in a speech bubble",
    title: "Emails",
  },
  {
    path: "/intro",
    image: lady,
    alt: "A cartoon illustration of a smiling black lady with glasses",
    title: "Introduction Animations",
  },
  {
    path: "/student-news",
    image: studentNews,
    alt: "Student News: The University of Chester Student Magazine",
    title: "Student News",
  },
  {
    path: "/cwac",
    image: phone,
    alt: "Phone with a text message conversation on the screen",
    title: "Cheshire West and Chester Council",
  },
  {
    path: "/icons",
    image: icons,
    alt: "A display of icons including a compass, lightbulb and sandwich",
    title: "Icons",
  },
  {
    path: "/women-in-tech",
    image: women,
    alt: "Women in Tech",
    title: "Women in Tech",
  },
  {
    path: "/uoc-timeline",
    image: grosvenor,
    alt: "Chester Building Illustration",
    title: "Grosvenor Mural",
  },
  {
    path: "/clearing",
    image: clearing,
    alt: "Two girls, one looking up and the other looking down with overlayed text that says 'Get World Ready'.",
    title: "Clearing Campaign",
  },
  {
    path: "/chester-mural",
    image: building,
    alt: "Chester Mural",
    title: "Chester Mural",
  },
];

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

function smoothstep(value) {
  const clampedValue = clamp(value, 0, 1);
  return clampedValue * clampedValue * (3 - 2 * clampedValue);
}

function getColumnOffset(index, currentScrollOffset, columnHeight) {
  if (!columnHeight) {
    return 0;
  }

  const speed = COLUMN_SPEEDS[index];
  const easing = COLUMN_EASING[index];
  const startOffset = columnHeight * COLUMN_START_OFFSETS[index];
  const rawOffset = startOffset + currentScrollOffset * speed * (1 + easing);
  const loopOffset =
    ((rawOffset % columnHeight) + columnHeight) % columnHeight;

  return index === FEATURED_COLUMN_INDEX
    ? -columnHeight + loopOffset
    : -columnHeight - loopOffset;
}

function createColumns() {
  const columns = [[], [], []];

  projects.forEach((project, index) => {
    columns[index % 3].push(project);
  });

  columns[FEATURED_COLUMN_INDEX].splice(FEATURED_TILE_INDEX, 0, FEATURED_PROJECT);

  return columns;
}

function FeaturedVideoCard({
  isMuted,
  onToggleMute,
  isPaused,
  onTogglePlayback,
  onControlPointerDown,
  onPlaybackStateChange,
  showAsHero,
  isPlaceholder,
  videoRef,
}) {
  return (
    <article
      className={`featured-video-card${showAsHero ? " featured-video-card--hero" : ""}`}
      aria-label={FEATURED_PROJECT.alt}
    >
      <div className="featured-video-media">
        {isPlaceholder ? (
          <div className="featured-video-placeholder" aria-hidden="true">
            <div className="featured-video-orb featured-video-orb--large" />
            <div className="featured-video-orb featured-video-orb--small" />
            <div className="featured-video-grid" />
            <div className="featured-video-placeholder-copy">
              <span>Drop in final MP4 when ready</span>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="featured-video-element"
            src={FEATURED_VIDEO_SRC}
            autoPlay
            loop
            playsInline
            preload="auto"
            muted={isMuted}
            onPlay={() => onPlaybackStateChange?.(false)}
            onPause={() => onPlaybackStateChange?.(true)}
          />
        )}

        <div className="featured-video-shade" />

        <div className="featured-video-content">
          <div className="featured-video-copy">
            <h1 className="featured-video-title">{FEATURED_PROJECT.title}</h1>
            <a
              className="featured-video-link"
              href="#featured-video"
              onClick={(event) => event.preventDefault()}
            >
              View project
            </a>
          </div>

          <div className="featured-video-controls">
            <button
              type="button"
              className="featured-video-control"
              onPointerDown={onControlPointerDown}
              onClick={onTogglePlayback}
              disabled={isPlaceholder}
              aria-pressed={!isPaused}
              aria-label={isPlaceholder ? "Playback unlocks with the final video" : isPaused ? "Play video" : "Pause video"}
              title={isPlaceholder ? "Playback unlocks with the final video" : isPaused ? "Play video" : "Pause video"}
            >
              <svg
                aria-hidden="true"
                className="featured-video-control-icon"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8 6.5L18 12L8 17.5Z"
                  fill="currentColor"
                  className={isPaused ? "" : "is-hidden"}
                />
                <path
                  d="M8.5 6.5H11V17.5H8.5Z"
                  fill="currentColor"
                  className={isPaused ? "is-hidden" : ""}
                />
                <path
                  d="M13 6.5H15.5V17.5H13Z"
                  fill="currentColor"
                  className={isPaused ? "is-hidden" : ""}
                />
              </svg>
            </button>

            <button
              type="button"
              className="featured-video-control"
              onPointerDown={onControlPointerDown}
              onClick={onToggleMute}
              disabled={isPlaceholder}
              aria-pressed={!isMuted}
              aria-label={
                isPlaceholder
                  ? "Audio unlocks with the final video"
                  : isMuted
                    ? "Unmute video"
                    : "Mute video"
              }
              title={
                isPlaceholder
                  ? "Audio unlocks with the final video"
                  : isMuted
                    ? "Unmute video"
                    : "Mute video"
              }
            >
              <svg
                aria-hidden="true"
                className="featured-video-control-icon"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 9.5V14.5H8.5L13 19V5L8.5 9.5H5Z"
                  fill="currentColor"
                />
                <path
                  d="M16.5 9C17.4 9.8 18 10.9 18 12C18 13.1 17.4 14.2 16.5 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className={isMuted ? "featured-video-audio-wave is-hidden" : ""}
                />
                <path
                  d="M18.7 6.8C20.2 8.2 21 10 21 12C21 14 20.2 15.8 18.7 17.2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className={isMuted ? "featured-video-audio-wave is-hidden" : ""}
                />
                <path
                  d="M6 6L18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={isMuted ? "" : "is-hidden"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function renderStandardProjectTile(project, extraClassName = "") {
  return (
    <div className={`link-image${extraClassName ? ` ${extraClassName}` : ""}`} key={project.path}>
      <Link to={project.path}>
        <Tile image={project.image} alt={project.alt} title={project.title} />
      </Link>
    </div>
  );
}

export default function Root() {
  const viewportRef = useRef(null);
  const columnSetRefs = useRef([]);
  const featuredColumnRef = useRef(null);
  const featuredSlotRef = useRef(null);
  const animationFrameRef = useRef(null);
  const targetScrollOffsetRef = useRef(0);
  const featuredDesktopVideoRef = useRef(null);
  const featuredMobileVideoRef = useRef(null);

  const [scrollOffset, setScrollOffset] = useState(0);
  const [columnHeights, setColumnHeights] = useState([0, 0, 0]);
  const [isCompactView, setIsCompactView] = useState(false);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [featuredColumnBounds, setFeaturedColumnBounds] = useState(null);
  const [featuredSlotBounds, setFeaturedSlotBounds] = useState(null);
  const [featuredTrackOffset, setFeaturedTrackOffset] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const projectColumns = useMemo(createColumns, []);
  const hasColumnMotionStarted =
    scrollOffset > FEATURED_SCROLL_DISTANCE + COLUMN_MOTION_DELAY;
  const getFeaturedVideos = () =>
    [
      featuredDesktopVideoRef.current,
      featuredMobileVideoRef.current,
    ].filter(Boolean);
  const featuredProgress = clamp(scrollOffset / FEATURED_SCROLL_DISTANCE, 0, 1);
  const columnScrollOffset = Math.max(
    scrollOffset - FEATURED_SCROLL_DISTANCE - COLUMN_MOTION_DELAY,
    0
  );
  const easedFeaturedProgress = Math.pow(featuredProgress, 1.65);
  const gridRevealProgress = smoothstep((featuredProgress - 0.18) / 0.74);
  const gridBlurAmount = (1 - gridRevealProgress) * 12;
  const gridOverlayOpacity = (1 - gridRevealProgress) * 0.22;

  useEffect(() => {
    const updateMeasurements = () => {
      const compact = window.innerWidth <= 900;
      setIsCompactView(compact);

      if (viewportRef.current) {
        setViewportSize({
          width: viewportRef.current.clientWidth,
          height: viewportRef.current.clientHeight,
        });
      }

      if (compact) {
        setColumnHeights([0, 0, 0]);
        setFeaturedColumnBounds(null);
        setFeaturedSlotBounds(null);
        setFeaturedTrackOffset(0);
        setScrollOffset(0);
        targetScrollOffsetRef.current = 0;
        return;
      }

      setColumnHeights(projectColumns.map((_, index) =>
        columnSetRefs.current[index]?.scrollHeight || 0
      ));

      if (viewportRef.current && featuredColumnRef.current) {
        const viewportRect = viewportRef.current.getBoundingClientRect();
        const columnRect = featuredColumnRef.current.getBoundingClientRect();

        setFeaturedColumnBounds({
          left: columnRect.left - viewportRect.left,
          top: columnRect.top - viewportRect.top,
          width: columnRect.width,
        });
      }

      if (viewportRef.current && featuredColumnRef.current && featuredSlotRef.current) {
        const columnRect = featuredColumnRef.current.getBoundingClientRect();
        const slotRect = featuredSlotRef.current.getBoundingClientRect();

        setFeaturedSlotBounds({
          left: slotRect.left - columnRect.left,
          top: slotRect.top - columnRect.top,
          width: slotRect.width,
          height: slotRect.height,
        });
      }
    };

    updateMeasurements();
    const measurementFrame = window.requestAnimationFrame(updateMeasurements);
    const resizeObserver = new ResizeObserver(() => {
      updateMeasurements();
    });

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    columnSetRefs.current.forEach((columnSet) => {
      if (columnSet) {
        resizeObserver.observe(columnSet);
      }
    });

    if (featuredColumnRef.current) {
      resizeObserver.observe(featuredColumnRef.current);
    }

    if (featuredSlotRef.current) {
      resizeObserver.observe(featuredSlotRef.current);
    }

    window.addEventListener("resize", updateMeasurements);
    window.addEventListener("load", updateMeasurements);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.cancelAnimationFrame(measurementFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMeasurements);
      window.removeEventListener("load", updateMeasurements);
    };
  }, [projectColumns]);

  useEffect(() => {
    if (isCompactView) {
      document.body.classList.remove("home-lock-scroll");
      return undefined;
    }

    document.body.classList.add("home-lock-scroll");

    return () => {
      document.body.classList.remove("home-lock-scroll");
    };
  }, [isCompactView]);

  useEffect(() => {
    const videos = getFeaturedVideos();

    if (!videos.length) {
      return;
    }

    videos.forEach((video) => {
      video.muted = isMuted;
    });
  }, [isMuted]);

  useEffect(() => {
    const videos = getFeaturedVideos();

    if (!videos.length) {
      return;
    }

    videos.forEach((video) => {
      if (isPaused) {
        video.pause();
        return;
      }

      const playPromise = video.play();

      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    });
  }, [isPaused, isCompactView]);

  const handleControlPointerDown = (event) => {
    event.stopPropagation();
  };

  const handleTogglePlayback = () => {
    setIsPaused((current) => !current);
  };

  useEffect(() => {
    if (
      isCompactView ||
      hasColumnMotionStarted ||
      !viewportRef.current ||
      !featuredSlotRef.current
    ) {
      return;
    }

    const viewportRect = viewportRef.current.getBoundingClientRect();
    const slotRect = featuredSlotRef.current.getBoundingClientRect();
    const slotCenter = slotRect.top + slotRect.height / 2 - viewportRect.top;
    const desiredCenter = viewportRect.height * FEATURED_TRACK_CENTER_RATIO;
    const delta = desiredCenter - slotCenter;

    if (Math.abs(delta) < 0.5) {
      return;
    }

    setFeaturedTrackOffset((current) => current + delta);
  }, [
    columnHeights,
    featuredSlotBounds,
    hasColumnMotionStarted,
    isCompactView,
    scrollOffset,
    viewportSize,
  ]);

  const handleWheel = (event) => {
    if (isCompactView) {
      return;
    }

    if (!Math.max(...columnHeights)) {
      return;
    }

    event.preventDefault();
    targetScrollOffsetRef.current = Math.max(
      targetScrollOffsetRef.current + event.deltaY * 1.35,
      0
    );

    if (animationFrameRef.current) {
      return;
    }

    const animateScroll = () => {
      setScrollOffset((currentOffset) => {
        const distance = targetScrollOffsetRef.current - currentOffset;
        const easingStep = Math.abs(distance) < 0.5 ? distance : distance * 0.1;
        const nextOffset = currentOffset + easingStep;

        if (Math.abs(distance) < 0.5) {
          animationFrameRef.current = null;
          return targetScrollOffsetRef.current;
        }

        animationFrameRef.current = window.requestAnimationFrame(animateScroll);
        return nextOffset;
      });
    };

    animationFrameRef.current = window.requestAnimationFrame(animateScroll);
  };

  const getColumnStyle = (index) => {
    if (isCompactView) {
      return undefined;
    }

    const height = columnHeights[index];

    if (!height) {
      return undefined;
    }

    const columnOffset =
      index === FEATURED_COLUMN_INDEX
        ? (() => {
            const speed = COLUMN_SPEEDS[index];
            const easing = COLUMN_EASING[index];
            const anchoredStartOffset =
              getColumnOffset(index, 0, height) + featuredTrackOffset;
            let normalizedStartOffset = anchoredStartOffset;

            while (normalizedStartOffset > 0) {
              normalizedStartOffset -= height;
            }

            while (normalizedStartOffset <= -height) {
              normalizedStartOffset += height;
            }

            const continuousOffset =
              normalizedStartOffset +
              columnScrollOffset * speed * (1 + easing);
            const wrappedOffset =
              ((continuousOffset % height) + height) % height;

            return wrappedOffset === 0 ? 0 : wrappedOffset - height;
          })()
        : getColumnOffset(index, columnScrollOffset, height);

    return {
      transform: `translate3d(0, ${columnOffset}px, 0)`,
    };
  };

  const featuredCardStyle = (() => {
    if (
      isCompactView ||
      !viewportSize.width ||
      !viewportSize.height ||
      !featuredColumnBounds ||
      !featuredSlotBounds
    ) {
      return null;
    }

    const initialInsetX = clamp(viewportSize.width * 0.04, 18, 42);
    const initialHeight =
      viewportSize.height - clamp(viewportSize.height * 0.08, 36, 80);
    const initialInsetY =
      (viewportSize.height - initialHeight) / 2 + FEATURED_HERO_VERTICAL_OFFSET;
    const initialWidth = viewportSize.width - initialInsetX * 2;
    const initialCenterX = viewportSize.width / 2 - featuredColumnBounds.left;
    const initialRect = {
      left: initialCenterX - initialWidth / 2,
      top: initialInsetY - featuredColumnBounds.top,
      width: initialWidth,
      height: initialHeight,
    };
    const mix = (start, end) =>
      start + (end - start) * easedFeaturedProgress;
    const translateX = mix(initialRect.left - featuredSlotBounds.left, 0);
    const translateY = mix(initialRect.top - featuredSlotBounds.top, 0);
    const scaleX = mix(initialRect.width / featuredSlotBounds.width, 1);
    const scaleY = mix(initialRect.height / featuredSlotBounds.height, 1);

    return {
      width: "100%",
      height: "100%",
      borderRadius: `${mix(36, 24)}px`,
      transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scaleX}, ${scaleY})`,
      transformOrigin: "top left",
      zIndex: featuredProgress < 0.999 ? 8 : 2,
      pointerEvents: "auto",
    };
  })();

  const renderMiddleProject = (project, repeatIndex) => {
    if (project.isFeatured) {
      return (
        <div
          className={`featured-track-slot${repeatIndex === 0 ? "" : " featured-track-slot--placeholder"}`}
          key={`${project.id}-${repeatIndex}`}
          ref={repeatIndex === 0 ? featuredSlotRef : null}
        >
          {repeatIndex === 0 ? (
            <div className="featured-track-card" style={featuredCardStyle}>
              <FeaturedVideoCard
                isMuted={isMuted}
                onToggleMute={() => setIsMuted((current) => !current)}
                isPaused={isPaused}
                onTogglePlayback={handleTogglePlayback}
                onControlPointerDown={handleControlPointerDown}
                onPlaybackStateChange={setIsPaused}
                showAsHero={featuredProgress < 0.96}
                isPlaceholder={!FEATURED_VIDEO_SRC}
                videoRef={featuredDesktopVideoRef}
              />
            </div>
          ) : null}
        </div>
      );
    }

    return renderStandardProjectTile(project, "featured-track-item");
  };

  const renderRepeatedSet = (column, columnIndex, repeatIndex) => (
    <div
      className="tile-column-set"
      key={`column-${columnIndex}-set-${repeatIndex}`}
      ref={(element) => {
        if (repeatIndex === 0) {
          columnSetRefs.current[columnIndex] = element;
        }
      }}
        >
      {column.map((project) =>
        columnIndex === FEATURED_COLUMN_INDEX
          ? renderMiddleProject(project, repeatIndex)
          : renderStandardProjectTile(project)
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Jess Bennion - Digital Designer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Jess Bennion, a Digital Designer from Chester, UK. Showcasing design work for print, digital, illustration, and video."
        />
        <meta
          name="keywords"
          content="digital design, graphic design, illustration, Chester, portfolio"
        />
      </Helmet>
      <div className="root">
        <div
          className="page-container"
          onWheel={handleWheel}
          ref={viewportRef}
        >
          {isCompactView ? (
            <div className="compact-home-stack">
              {projectColumns.flat().map((project) =>
                project.isFeatured ? (
                  <div className="featured-slot featured-slot--mobile" key={project.id}>
                    <FeaturedVideoCard
                      isMuted={isMuted}
                      onToggleMute={() => setIsMuted((current) => !current)}
                      isPaused={isPaused}
                      onTogglePlayback={handleTogglePlayback}
                      onControlPointerDown={handleControlPointerDown}
                      onPlaybackStateChange={setIsPaused}
                      showAsHero={false}
                      isPlaceholder={!FEATURED_VIDEO_SRC}
                      videoRef={featuredMobileVideoRef}
                    />
                  </div>
                ) : (
                  renderStandardProjectTile(project)
                )
              )}
            </div>
          ) : (
            <>
              {projectColumns.map((column, index) => (
                <div
                  className={index === FEATURED_COLUMN_INDEX ? "featured-column-shell" : "tile-column"}
                  key={`column-${index}`}
                  ref={index === FEATURED_COLUMN_INDEX ? featuredColumnRef : null}
                  style={{
                    ...(index === FEATURED_COLUMN_INDEX ? {} : getColumnStyle(index)),
                    ...(index === FEATURED_COLUMN_INDEX
                      ? {}
                      : {
                          filter: `blur(${gridBlurAmount}px)`,
                          opacity: 0.6 + gridRevealProgress * 0.4,
                        }),
                  }}
                >
                  <div
                    className={index === FEATURED_COLUMN_INDEX ? "tile-column featured-column-track" : "tile-column"}
                    style={
                      index === FEATURED_COLUMN_INDEX
                        ? {
                            ...getColumnStyle(index),
                            "--featured-grid-blur": `blur(${gridBlurAmount}px)`,
                            "--featured-grid-opacity": 0.6 + gridRevealProgress * 0.4,
                          }
                        : undefined
                    }
                  >
                    {Array.from({ length: COLUMN_REPEAT_COUNT }).map((_, repeatIndex) =>
                      renderRepeatedSet(column, index, repeatIndex)
                    )}
                  </div>
                </div>
              ))}

              <div
                className="grid-softener"
                aria-hidden="true"
                style={{ opacity: gridOverlayOpacity }}
              />
            </>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
}
