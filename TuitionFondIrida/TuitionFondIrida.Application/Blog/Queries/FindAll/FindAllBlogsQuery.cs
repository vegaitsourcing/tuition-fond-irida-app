using TuitionFondIrida.Application.Abstractions;
using TuitionFondIrida.Domain.Models.Common;

namespace TuitionFondIrida.Application.Blog.Queries.FindAll;

public class FindAllBlogsQuery : IQuery<PageOf<Domain.Models.Read.Blog>>
{
    public FindAllBlogsQuery(int pageNumber)
    {
        this.PageNumber = pageNumber;
    }

    public int PageNumber { get; }
}