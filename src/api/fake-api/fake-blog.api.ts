/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { BlogApi, IGetBlogCategoriesOptions } from '~/api/base';
import { getBlogCategories, getLatestPosts } from '~/fake-server/endpoints';
import { IBlogCategory } from '~/interfaces/category';
import { IPost } from '~/interfaces/post';

export class FakeBlogApi extends BlogApi {
    getLatestPosts(limit: number): Promise<IPost[]> {
        return getLatestPosts(limit);
    }

    getCategories(options: IGetBlogCategoriesOptions): Promise<IBlogCategory[]> {
        return getBlogCategories(options);
    }
}
