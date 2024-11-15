import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'

export default function SelectForm({ setData, article }: any) {

    const categories = ['Hiking', 'Trail', 'Camping', 'Fishing', 'Hunting'];

  return (
    <div>
        <Select onValueChange={(v) => setData('category_id', v)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Pick a category" />
  </SelectTrigger>
  <SelectContent>
    {
        article && (
    <SelectItem value={article.category}>{article.category}</SelectItem>
  )}
     {
        article ? (
        categories.filter(cat => cat !== article.title).map((c, i) => (
               <SelectItem key={i} value={c}>
                    {c}
               </SelectItem>
        ))
     ) : (
        categories.map((c, i) => (
            <SelectItem key={i} value={c}>
                 {c}
            </SelectItem>

    )))}
  </SelectContent>
</Select>

    </div>
  )
}

