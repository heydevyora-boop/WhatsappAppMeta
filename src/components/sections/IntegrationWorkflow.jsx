import { workflowSteps } from '@/data/whatsapp';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';

/**
 * Top-to-bottom integration workflow diagram.
 * Reads as a single column at every breakpoint, which keeps the sequence
 * unambiguous on a phone and avoids a cramped seven-across row on desktop.
 */
export default function IntegrationWorkflow() {
  return (
    <ol className="flex flex-col items-stretch max-w-doc w-full mx-auto list-none">
      {workflowSteps.map((step, index) => (
        <li key={step.title} className="flex flex-col items-center">
          <Card className="w-full p-space-sm md:p-space-md flex items-center gap-space-sm">
            <span
              className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary flex-shrink-0"
              aria-hidden="true"
            >
              <Icon name={step.icon} className="text-[20px]" />
            </span>
            <span className="flex flex-col min-w-0">
              <span className="font-label-lg text-label-lg text-on-surface">
                <span className="text-outline tnum mr-1.5">{index + 1}.</span>
                {step.title}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {step.description}
              </span>
            </span>
          </Card>

          {index < workflowSteps.length - 1 && (
            <span className="flex flex-col items-center py-1" aria-hidden="true">
              <span className="w-px h-3 bg-outline-variant" />
              <Icon name="arrow_downward" className="text-[18px] text-outline" />
              <span className="w-px h-3 bg-outline-variant" />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
