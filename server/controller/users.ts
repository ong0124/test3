import { H3Event } from 'h3';

import * as usersModel from '~~/server/models/users';

export const read = async () => {
  try {
    const result = await usersModel.read();

    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const createUser = async (evt: H3Event) => {
  try {
    // 讀取請求 Body
    const body = await readBody(evt);

    // 檢查必要的欄位是否存在
    if (!body.id || !body.full_name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing Line User Document'
      });
    }

    // 插入資料到 users 表
    const result = await usersModel.createUser({
      id: body.id,
      full_name: body.full_name,
      password: body.password|| null,
      created_at: new Date(), // 自動填入當前時間
      LineID: body.LineID || null,
      email: body.email || null,
      birthday: body.birthday || null,
      account_name: body.account_name || null
    });

    return {
      success: true,
      data: result
    };
  } catch (err) {
    console.error('Error:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};


export const detail = async (evt: H3Event) => {
  try {
    const result = await usersModel.detail(evt.context.params?.id as string);

    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

// export const update = async (evt: H3Event) => {
//   try {
//     const body = await readBody(evt);
//     const result = await blogModel.update(evt.context.params?.id as string, {
//       title: body.title,
//       content: body.content
//     });

//     return {
//       data: result
//     };
//   } catch {
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Something went wrong'
//     });
//   }
// };

// export const remove = async (evt: H3Event) => {
//   try {
//     const result = await blogModel.remove(evt.context.params?.id as string);

//     return {
//       data: result
//     };
//   } catch {
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Something went wrong'
//     });
//   }
// };
