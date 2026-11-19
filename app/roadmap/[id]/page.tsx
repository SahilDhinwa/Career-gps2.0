
"use client";

import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  CheckCircle,
  Circle,
  MapPin,
  BookOpen,
  ChevronRight,
  CheckSquare,
  Square,
  Sparkles,
  RotateCcw,
} from "lucide-react";

import {
  masterRoadmap,
  ugRoadmap,
  mextUgRoadmap,
  cheveningRoadmap,
  daadRoadmap,
  commonwealthRoadmap,
  fulbrightRoadmap,
} from "../../../lib/roadmaps";

type RoadmapStage = {
  id: number;
  title: string;
  desc: string;
  checklist?: string[];
  notes?: string;
};

type StageStatus = "completed" | "active" | "locked";

export default function RoadmapTracker() {
  const params = useParams<{ id: string }>();
  const roadmapId = params.id ?? "master";

  const { baseRoadmap, locationTag, levelTag } =
    useMemo(() => {
      let roadmap = masterRoadmap;
      let location = "Global Institutions";
      let level = "MASTER'S LEVEL";

      if (roadmapId.includes("commonwealth")) {
        roadmap = commonwealthRoadmap;
        location =
          "United Kingdom • Development Masters";
      } else if (roadmapId.includes("chevening")) {
        roadmap = cheveningRoadmap;
        location =
          "United Kingdom • Global Institutions";
      } else if (roadmapId.includes("daad")) {
        roadmap = daadRoadmap;
        location =
          "Germany • Global Institutions";
      } else if (roadmapId === "mext-ug") {
        roadmap = mextUgRoadmap;
        location =
          "Japan • Global Institutions";
        level = "UG LEVEL";
      } else if (roadmapId === "mext-phd") {
        roadmap = masterRoadmap;
        location =
          "Japan • Target Universities";
        level = "PHD / RESEARCH LEVEL";
      } else if (roadmapId.includes("fulbright")) {
        roadmap = fulbrightRoadmap;
        location =
          "United States • USIEF";
        level = "MASTER'S & DOCTORAL LEVEL";
      } else if (
        roadmapId.includes("ug") ||
        roadmapId.includes("wise")
      ) {
        roadmap = ugRoadmap;
        level = "UG LEVEL";
      }

      return {
        baseRoadmap: roadmap as RoadmapStage[],
        locationTag: location,
        levelTag: level,
      };
    }, [roadmapId]);

  const [progressByRoadmap, setProgressByRoadmap] =
    useState<Record<string, number>>({});

  const [checklistsByRoadmap, setChecklistsByRoadmap] =
    useState<Record<string, string[]>>({});

  const currentStageIndex =
    progressByRoadmap[roadmapId] ?? 0;

  const checkedItems =
    checklistsByRoadmap[roadmapId] ?? [];

  const stages = baseRoadmap.map((stage, index) => {
    const status: StageStatus =
      index < currentStageIndex
        ? "completed"
        : index === currentStageIndex
          ? "active"
          : "locked";

    return { ...stage, status };
  });

  const completedCount = Math.min(
    currentStageIndex,
    stages.length
  );

  const progressPercent =
    stages.length > 0
      ? (completedCount / stages.length) * 100
      : 0;

  const handleToggleCheck = (item: string) => {
    setChecklistsByRoadmap((previous) => {
      const existing = previous[roadmapId] ?? [];

      return {
        ...previous,
        [roadmapId]: existing.includes(item)
          ? existing.filter(
              (entry) => entry !== item
            )
          : [...existing, item],
      };
    });
  };

  const handleMarkComplete = (stageIndex: number) => {
    setProgressByRoadmap((previous) => ({
      ...previous,
      [roadmapId]: Math.min(
        stageIndex + 1,
        baseRoadmap.length
      ),
    }));
  };

  const handleReset = () => {
    setProgressByRoadmap((previous) => ({
      ...previous,
      [roadmapId]: 0,
    }));

    setChecklistsByRoadmap((previous) => ({
      ...previous,
      [roadmapId]: [],
    }));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/2 left-0 w-80 h-80 bg-success/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="bg-surface/80 backdrop-blur-md border border-surfaceBorder p-8 md:p-12 mb-10 rounded-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="flex flex-wrap gap-3 mb-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {levelTag}
            </span>

            <span className="inline-flex items-center bg-success/10 text-success border border-success/20 px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider">
              FRONTEND DEMO
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 uppercase text-foreground relative z-10">
            {roadmapId.replace(/-/g, " ")}
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 flex items-center gap-2 font-medium relative z-10">
            <MapPin className="w-5 h-5 text-primary" />
            {locationTag}
          </p>

          <p className="mt-5 text-sm text-foreground/60 relative z-10">
            Reference interface only. Progress is
            stored in temporary React state and
            resets when the page reloads.
          </p>
        </div>

        <div className="mb-12 bg-surface/50 backdrop-blur-sm border border-surfaceBorder p-6 rounded-sm shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-4 gap-3">
            <p className="font-heading text-xl font-bold text-foreground">
              Mission Progress
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-foreground/60 font-bold bg-background/50 px-3 py-1 rounded-sm border border-surfaceBorder">
                {completedCount} of {stages.length} Stages
                Completed
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:opacity-70 transition-opacity"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>
          </div>

          <div className="w-full bg-background h-3 rounded-full overflow-hidden border border-surfaceBorder/50 shadow-inner">
            <div
              className="bg-gradient-to-r from-success/80 to-success h-full transition-all duration-1000 ease-out relative"
              style={{
                width: `${progressPercent}%`,
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]" />
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8 relative">
          {stages.map((stage, index) => {
            const isCompleted =
              stage.status === "completed";

            const isActive =
              stage.status === "active";

            const isLocked =
              stage.status === "locked";

            return (
              <div
                key={`${roadmapId}-${stage.id}`}
                className="relative flex gap-4 md:gap-8"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="bg-background z-10 py-1">
                    {isCompleted && (
                      <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-success bg-background rounded-full shadow-sm" />
                    )}

                    {isActive && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-40 animate-pulse" />
                        <Circle className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary/10 bg-background rounded-full shadow-md relative z-10" />
                      </div>
                    )}

                    {isLocked && (
                      <Circle className="w-8 h-8 md:w-10 md:h-10 text-foreground/20 bg-background rounded-full" />
                    )}
                  </div>

                  {index !== stages.length - 1 && (
                    <div
                      className={`w-0.5 h-full -mt-2 transition-colors duration-500 ${
                        isCompleted
                          ? "bg-success"
                          : "bg-surfaceBorder/80"
                      }`}
                    />
                  )}
                </div>

                <div
                  className={`flex-1 min-w-0 p-6 md:p-8 border mb-6 rounded-sm transition-all duration-500 ${
                    isCompleted
                      ? "bg-surface/80 backdrop-blur-sm border-success/30 shadow-sm"
                      : isActive
                        ? "bg-surface/95 backdrop-blur-md border-primary/50 shadow-xl shadow-primary/5 md:scale-[1.02]"
                        : "bg-background/50 border-surfaceBorder opacity-70"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
                    <h3
                      className={`font-heading text-2xl md:text-3xl font-bold ${
                        isLocked
                          ? "text-foreground/50"
                          : "text-foreground"
                      }`}
                    >
                      Stage {stage.id}: {stage.title}
                    </h3>

                    <span
                      className={`self-start text-[10px] md:text-xs font-bold px-3 py-1.5 uppercase tracking-widest rounded-sm border ${
                        isCompleted
                          ? "bg-success/10 text-success border-success/30"
                          : isActive
                            ? "bg-primary/10 text-primary border-primary/30"
                            : "bg-foreground/5 text-foreground/50 border-surfaceBorder"
                      }`}
                    >
                      {stage.status}
                    </span>
                  </div>

                  <p
                    className={`text-base md:text-lg mb-8 leading-relaxed ${
                      isLocked
                        ? "text-foreground/50"
                        : "text-foreground/80"
                    }`}
                  >
                    {stage.desc}
                  </p>

                  {(isActive || isCompleted) &&
                    stage.checklist && (
                      <div className="mb-8">
                        <p className="font-bold text-xs md:text-sm text-foreground mb-4 uppercase tracking-widest flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-primary" />
                          Action Items
                        </p>

                        <ul className="space-y-3">
                          {stage.checklist.map(
                            (item, itemIndex) => {
                              const itemKey =
                                `${stage.id}:${itemIndex}`;

                              const isItemChecked =
                                checkedItems.includes(
                                  itemKey
                                );

                              return (
                                <li key={itemKey}>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleToggleCheck(
                                        itemKey
                                      )
                                    }
                                    className={`w-full text-left flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-sm transition-all duration-300 border ${
                                      isItemChecked
                                        ? "bg-success/5 border-success/20"
                                        : "bg-background/50 border-surfaceBorder hover:border-primary/40 hover:bg-surface hover:shadow-sm"
                                    }`}
                                  >
                                    {isItemChecked ? (
                                      <CheckSquare className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0 mt-0.5" />
                                    ) : (
                                      <Square className="w-5 h-5 md:w-6 md:h-6 text-foreground/40 shrink-0 mt-0.5" />
                                    )}

                                    <span
                                      className={`text-sm md:text-base font-medium leading-relaxed ${
                                        isItemChecked
                                          ? "line-through text-foreground/40"
                                          : "text-foreground/90"
                                      }`}
                                    >
                                      {item}
                                    </span>
                                  </button>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    )}

                  {(isActive || isCompleted) &&
                    stage.notes && (
                      <div className="bg-warning/5 border border-warning/20 border-l-4 border-l-warning p-4 md:p-5 mb-8 flex gap-3 md:gap-4 rounded-sm shadow-sm">
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-warning shrink-0 mt-0.5" />

                        <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed">
                          {stage.notes}
                        </p>
                      </div>
                    )}

                  {isActive && (
                    <button
                      type="button"
                      onClick={() =>
                        handleMarkComplete(index)
                      }
                      className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 hover:bg-primaryHover transition-all duration-300 mt-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 rounded-sm"
                    >
                      Mark Stage Complete
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {stages.length > 0 &&
            completedCount === stages.length && (
              <div className="border border-success/30 bg-success/5 p-8 rounded-sm text-center">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />

                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  All Stages Completed
                </h2>

                <p className="text-foreground/70 mb-5">
                  Frontend demonstration complete.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-sm font-bold hover:bg-primaryHover transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Restart Demo
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
