import { FILES } from '@/constants';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const redirect = (router: AppRouterInstance, file: string) => {
  FILES.forEach((ele) => {
    if (ele.file === file) {
      router.push(file);
    }
  });
};
