'use client'

import { Label } from '@radix-ui/react-label'
import { Section } from '../ui/section'
import { getIcon } from '../../icons/getIcon'
import type { EducationType } from '@/types'

export function Education({ data }: { data: EducationType }) {
  return (
    <Section>
      <Label data-cy="education_title" className="text-xl font-bold">
        Education
      </Label>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        <div className="space-y-8">
          {data.map((education, index) => (
            <div className="relative pl-6" key={index}>
              {getIcon('dot', {
                className: 'absolute -left-[12px] top-0',
                strokeWidth: 8,
              })}
              <div className="flex flex-wrap items-center justify-between text-base">
                <div
                  data-cy={`education_school_index_${index}`}
                  className="font-semibold leading-none"
                >
                  {education.school}
                </div>
                <div
                  data-cy={`education_start_end_index_${index}`}
                  className="tabular-nums text-gray-500"
                >
                  {education.start}
                  {' '}
                  -
                  {' '}
                  {education.end}
                </div>
              </div>
              <div data-cy={`education_degree_index_${index}`}>
                {education.degree}
              </div>
              <div
                data-cy={`education_aggregate_index_${index}`}
                className="text-sm font-semibold"
              >
                Aggregate:
                {' '}
                {education?.aggregate ?? education?.cgpa}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
