using Autofac;
using TuitionFondIrida.Api.AutofacModule;
using TuitionFondIrida.ApiAdapter.AutofacModule;
using TuitionFondIrida.Application.AutofacModule;
using TuitionFondIrida.Domain.AutofacModule;
using TuitionFondIrida.Persistence.AutofacModule;

namespace TuitionFondIrida.Host;

public class CompositionRootModule : Module
{
    private readonly IConfiguration configuration;

    public CompositionRootModule(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterModule<ApiModule>();
        builder.RegisterModule<ApplicationModule>();
        builder.RegisterModule<DomainModule>();
        builder.RegisterModule(new PersistenceModule(this.configuration));
        builder.RegisterModule(new ApiAdapterModule(this.configuration));
    }
}