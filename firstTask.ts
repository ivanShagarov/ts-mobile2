// useEffect(() => {
//     if (orderChanged && Object.keys(deepLinks).length) {
//       const newDeeplinks: Record<number, DeepLink[]> = { ...deepLinks };
//       defaultText.current = {};
//       // Переносим из старого ордера, только если там что-то есть, если целевой индекс пустой и если это не новый блок
//       if (
//         ordersToChange.current[currentFormNumber.current]?.validNewOrder &&
//         deepLinks[ordersToChange.current[currentFormNumber.current]?.oldOrder!] &&
//         !deepLinks[ordersToChange.current[currentFormNumber.current]?.newOrder!] &&
//         !isNewBlock.current
//       ) {
//         newDeeplinks[ordersToChange.current[currentFormNumber.current].newOrder!] =
//           deepLinks[ordersToChange.current[currentFormNumber.current].oldOrder!];
//         delete newDeeplinks[ordersToChange.current[currentFormNumber.current].oldOrder!];
//         // console.log(
//         //   'ordersToChange.current.oldOrder +++ *** +++',
//         //   ordersToChange.current[currentFormNumber.current].oldOrder,
//         // );
//       }

//       form.getFieldsValue().content?.forEach((item, index) => {
//         defaultText.current[index] = item?.value || '';
//         // console.log('defaultText.current[index]***', defaultText.current[index], index);
//       });

//       // console.log(
//       //   'newDeeplinks***',
//       //   newDeeplinks,
//       //   ordersToChange.current[currentFormNumber.current]?.newOrder,
//       //   ordersToChange.current[currentFormNumber.current]?.oldOrder,
//       //   isNewBlock.current,
//       // );

//       form.setFieldsValue({
//         ...form.getFieldsValue(),
//         content: form.getFieldsValue().content
//           ? [...form.getFieldsValue().content]
//               // ?.sort((a, b) => a.order - b.order)
//               ?.map((item, index) => {
//                 const result: any = {};
//                 if (newDeeplinks[item?.order]) {
//                   result.redirectDeepLink = newDeeplinks[item?.order];
//                 }
//                 const checkResult = {
//                   ...item,
//                   ...result,
//                 };
//                 return checkResult;
//               })
//           : [],
//       });

//       setDeepLinks(newDeeplinks);
//       setOrderChanged(false);
//     }
//   }, [deepLinks, form, orderChanged]);

  export default class FirstTask {
    message = '';
    constructor(m: string) {
      this.message = m;
    }
    sayHello() {
      return "hello from class " + this.message;
    }
  }
  